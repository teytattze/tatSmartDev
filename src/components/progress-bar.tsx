import cx from 'clsx';

type ProgressBarProps = {
  completed: number;
};

export function ProgressBar({ completed }: ProgressBarProps) {
  return (
    <div className="h-2 w-full bg-darkgrey rounded-md">
      <div
        className={cx('h-full bg-primary rounded-md')}
        style={{ width: `${completed}%` }}
      />
    </div>
  );
}
