import { Index } from "@/components/views/register/Index";
import { View } from "@/components/layout/View.tsx";
import { createLazyFileRoute } from "@tanstack/react-router";

const Register = () => (
  <View>
    <Index />
  </View>
);

export const Route = createLazyFileRoute("/register")({
  component: Register,
});
