import StepProgressBar from '@trip/createTrip/_components/StepProgressBar';
import CreateTripHeader from '@trip/createTrip/_components/CreateTripHeader';
import CountrySearchSection from '@trip/createTrip/_components/CountrySearchSection';

const CreateTrip = () => {
  return (
    <div>
      <CreateTripHeader />
      <StepProgressBar />
      <CountrySearchSection />
    </div>
  );
};

export default CreateTrip;
