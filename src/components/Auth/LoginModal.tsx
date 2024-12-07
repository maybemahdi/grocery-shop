"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import toast from "react-hot-toast";
import { RegisterModal } from "./RegisterModal";
import dynamic from "next/dynamic";
interface LoginModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const LoginModal = ({ open, setOpen }: LoginModalProps) => {
  
  const [registerModalOpen, setRegisterModalOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        { email, password }
      );

      console.log(data);

      if (data?.success) {
        // Login was successful
        localStorage.setItem("token", data.data.token);
        toast.success(data.message);
        form.reset();
         if (typeof window !== "undefined") {
           window.location.reload();
         }
      } else {
        // Login failed
        toast.error(data?.message || "Failed to log in");
        form.reset();
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred during login. Please try again.");
      form.reset();
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Login
            </DialogTitle>
            <Button
              variant="ghost"
              className="absolute right-4 top-4 h-4 w-4 p-0"
              onClick={() => setOpen(false)}
            >
              {/* <X className="h-4 w-4" /> */}
              <span className="sr-only">Close</span>
            </Button>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="h-11"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-11 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-orange hover:bg-orange-600"
            >
              Login
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <div className="text-center text-sm">
              {"Don't have an account? "}
              <Button
                variant="link"
                onClick={() => {
                  setOpen(false);
                  setRegisterModalOpen(true);
                }}
                className="h-auto p-0 text-orange hover:text-orange-600"
              >
                Sign up
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <RegisterModal open={registerModalOpen} setOpen={setRegisterModalOpen} />
    </>
  );
}
export default dynamic(() => Promise.resolve(LoginModal), { ssr: false });