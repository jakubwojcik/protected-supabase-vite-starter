import { createLazyFileRoute } from "@tanstack/react-router";

import { View } from "@/components/layout/View.tsx";
import { Index } from "@/components/views/login/Index";

const Login = () => (
  <View>
    <Index />
  </View>
);

export const Route = createLazyFileRoute("/login")({
  component: Login,
});
