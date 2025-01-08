import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/");
  }

  const user = session?.user;
  return (
    <div className="text-center mt-10">
      <h1 className=" font-bold  text-2xl">Welcome to the dashboard</h1>
      <ul>
        <li>Name:{user.name}</li>
        <li>Email:{user.email}</li>
      </ul>
    </div>
  );
}
