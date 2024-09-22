import Index from "@/components/views/index/Index";
import { View } from "@/components/layout/View.tsx";
import { createLazyFileRoute } from "@tanstack/react-router";

const Component = () => (
  <View>
    <Index />
  </View>
);

export const Route = createLazyFileRoute("/")({
  component: Component,
});
