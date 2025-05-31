import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import type { GitHubUser } from '@/types/github';
import RepoList from '@/components/RepoList';
import mockRepos from '@/mock/mockRepos';

type UserListProps = {
    users: GitHubUser[];
};

export default function UserList({ users }: UserListProps) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full mt-3 space-y-2">
            {users.map((user) => (
                <AccordionItem
                    key={user.username}
                    value={user.username}>
                    <AccordionTrigger className="bg-gray-100 p-2 rounded-none text-left hover:bg-gray-50 font-normal text-base justify-between">
                        {user.username}
                    </AccordionTrigger>
                    <AccordionContent>
                        <Card>
                            <CardContent className="py-0 pt-3 px-0 pl-5">
                                <RepoList repos={mockRepos} />
                            </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
