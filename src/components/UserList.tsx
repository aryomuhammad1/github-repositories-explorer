import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import type { GitHubUser } from '@/types/github';
import RepoList from '@/components/RepoList';
import { useState } from 'react';

type UserListProps = {
    users: GitHubUser[];
};

export default function UserList({ users }: UserListProps) {
    const [activeUser, setActiveUser] = useState<string>('');

    return (
        <Accordion
            type="single"
            collapsible
            className="w-full mt-3 space-y-2">
            {users.map((user) => (
                <AccordionItem
                    key={user.login}
                    value={user.login}>
                    <AccordionTrigger
                        className="bg-gray-100 p-2 rounded-none text-left hover:bg-gray-50 font-normal text-base justify-between cursor-pointer"
                        onClick={() => setActiveUser(user.login)}>
                        {user.login}
                    </AccordionTrigger>
                    <AccordionContent>
                        <Card>
                            <CardContent className="py-0 pt-3 px-0 pl-5">
                                <RepoList
                                    username={user.login}
                                    isActive={activeUser === user.login}
                                />
                            </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
