// Component
import Tag from '@/components/common/Tag';

export interface ITimelineProps {
  // timeStart: Optional start time for the timeline. Defaults to an empty string if not provided.
  timeStart?: string;
  // timeEnd: Optional end time for the timeline. Defaults to an empty string if not provided.
  timeEnd?: string;
}

/**
 * Timeline component
 *
 * @returns {JSX.Element} - Timeline element.
 */
const Timeline = ({ timeStart = '', timeEnd = '' }: ITimelineProps): JSX.Element => {
  const displayTimeStart = timeStart.trim() === '' ? '-' : timeStart;
  const displayTimeEnd = timeEnd.trim() === '' ? '-' : timeEnd;

  return (
    <div className='flex gap-1 items-center'>
      <Tag customClasses='w-[98px]'>{displayTimeStart}</Tag>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        role='img'
        aria-label='Next'
      >
        <path d='M6.5 11L9.5 8L6.5 5' stroke='#868FA0' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
      <Tag customClasses='w-[98px]'>{displayTimeEnd}</Tag>
    </div>
  );
};

export default Timeline;
