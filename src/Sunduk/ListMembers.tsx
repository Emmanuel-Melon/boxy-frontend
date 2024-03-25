import { useFetch } from "@/hooks/useFetch";

export const SundukMemberOverview = ({ member }) => {
  return (
    <div>
      <h3>{member.name}</h3>
    </div>
  );
};

export const ListSundukMembers = () => {
  const { data: users } = useFetch("/users");
  return (
    <div>
      {users?.users?.map((user) => (
        <SundukMemberOverview key={user.id} member={user} />
      ))}
    </div>
  );
};
