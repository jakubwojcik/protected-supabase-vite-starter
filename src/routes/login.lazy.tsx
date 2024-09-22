import { Index } from "@/components/views/login/Index";
import { View } from "@/components/layout/View.tsx";
import { createLazyFileRoute } from "@tanstack/react-router";

const Login = () => (
  <View>
    <Index />
  </View>
);

export const Route = createLazyFileRoute("/login")({
  component: Login,
});
