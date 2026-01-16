import './glass-card.scss';
import cn from 'classnames';

interface GlassCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GlassCard(props: GlassCardProps) {
  const { className, children } = { ...props };
  const classNames = cn('app-glass-card', className);

  return (
    <div className={classNames}>
      <div className="app-glass-card-children">{children}</div>
    </div>
  );
}
