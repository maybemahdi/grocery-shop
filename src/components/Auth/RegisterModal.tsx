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
import axios from "axios";
import toast from "react-hot-toast";
// import { LoginModal } from "./LoginModal";
interface RegisterModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function RegisterModal({ open, setOpen }: RegisterModalProps) {
  // const [loginModalOpen, setLoginModalOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fullName = (form.elements.namedItem("name") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/register`,
        { fullName, email, password }
      );

      console.log(data);

      if (data?.success) {
        form.reset();
        toast.success(data.message);
        setOpen(false)
      } else {
        form.reset();
        toast.error(data?.message || "Failed to Register");
        setOpen(false);
      }
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("An error occurred during registration. Please try again.");
      form.reset();
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Register
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
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="name"
                placeholder="Enter your name"
                className="h-11"
                required
              />
            </div>
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
            <Button
              type="submit"
              className="w-full bg-orange hover:bg-orange-600"
            >
              Register
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
                // onClick={() => {
                //   setOpen(false);
                //   setLoginModalOpen(true);
                // }}
                className="h-auto p-0 text-orange hover:text-orange-600"
              >
                Sign in
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      {/* Register Modal */}
      {/* <LoginModal open={loginModalOpen} setOpen={setLoginModalOpen} /> */}
    </>
  );
}
