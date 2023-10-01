import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { SiRocketdotchat } from 'react-icons/si';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { VscSignOut } from 'react-icons/Vsc';
import { signOut } from 'next-auth/react';
import useConversation from './useConversation';

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: 'Chat',
        href: '/conversations',
        icon: SiRocketdotchat,
        active: pathname === '/conversations' || !!conversationId,
      },
      {
        label: 'Users',
        href: '/users',
        icon: HiUsers,
        active: pathname === '/users',
      },
      {
        label: 'Logout',
        href: '#',
        onClick: () => signOut(),
        icon: VscSignOut,
      },
    ],
    [pathname, conversationId]
  );
  return routes;
};

export default useRoutes;
