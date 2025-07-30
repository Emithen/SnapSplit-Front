'use client';
import { EditDatePageProps } from './type';
import SelectDateSection from '@/shared/components/steps/Step2_SelectDate';

const EditDatePage = ({ tripId }: EditDatePageProps) => {
  console.log('tripId : ' + tripId);

  return (
    <div>
      <SelectDateSection
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        startDate={null}
        endDate={null}
        setStartDate={() => {}}
        setEndDate={() => {}}
      />
    </div>
  );
};

export default EditDatePage;
