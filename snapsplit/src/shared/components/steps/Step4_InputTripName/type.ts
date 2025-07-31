export type InputTripNameSectionProps = {
    onClick: () => void
    tripName?: string;
    tripImage?: string;
    variant?: 'create' | 'edit';
};
 
export interface TripImageUploaderProps {
  initialImage?: string;
}