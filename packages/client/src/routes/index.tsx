import SignUp from "@/components/sign-up-form";
import { trpc } from "@/utils/trpc";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const healthCheck = trpc.healthCheck.useQuery();
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Link to="/dashboard">Go to Dashboard</Link>
      <p>healthCheck: {healthCheck.data}</p>
      <SignUp />
    </div>
  );
}
