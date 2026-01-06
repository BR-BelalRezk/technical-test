import React from "react";
import { CardDescription, CardHeader, CardTitle } from "./shadcn/card";

type props = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function FormHeader({ title, description, children }: props) {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        {description}
        {children}
      </CardDescription>
    </CardHeader>
  );
}
