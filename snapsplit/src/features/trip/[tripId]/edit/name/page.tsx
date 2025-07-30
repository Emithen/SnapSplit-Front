'use client';

import InputTripNameSection from '@/shared/components/steps/Step4_InputTripName';
import { EditNamePageProps } from './type';

const EditNamePage = ({ tripId }: EditNamePageProps) => {
  console.log('- tripId: ' + tripId);

  return (
    <InputTripNameSection
      onClick={() => {
        /* api 호출 */
      }}
    />
  );
};

export default EditNamePage;
