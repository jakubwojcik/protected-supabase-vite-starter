import { createLazyFileRoute } from "@tanstack/react-router";

import { View } from "@/components/layout/View.tsx";
import { Index } from "@/components/views/register/Index";

const Register = () => (
  <View>
    <Index />
  </View>
);

export const Route = createLazyFileRoute("/register")({
  component: Register,
});
