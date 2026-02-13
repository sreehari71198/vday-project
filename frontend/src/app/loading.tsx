import LoadingScreen from "@/components/ui/LoadingScreen";
import { appCopy } from "@/config/copy";

export default function Loading() {
  return (
    <LoadingScreen title={appCopy.loading.title} subtitle={appCopy.loading.subtitle} />
  );
}