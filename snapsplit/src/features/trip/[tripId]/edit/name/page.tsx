'use client';

import { EditNamePageProps } from './type';

const EditNamePage = ({ tripId }: EditNamePageProps) => {
  return <div className="h-full flex flex-col">{tripId}의 EditNamePage</div>;
};

export default EditNamePage;
