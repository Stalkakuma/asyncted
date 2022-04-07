import { Navigation } from 'components/Navigation/Navigation';
import './layout.scss';

interface PageProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: PageProps) => {
  return (
    <div className='layout'>
      <aside className='layout__navigation'>
        <Navigation />
      </aside>
      <main className='layout__content'>{children}</main>
    </div>
  );
};
