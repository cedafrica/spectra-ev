import MaxContainer from "../common/max-container";
import CustomButton from "../common/custom-button";

interface CallToActionProps {
    headline: string;
    subheadline: string;
    buttonText: string;
    buttonLink: string;
}

const CallToAction = ({ 
    headline, 
    subheadline, 
    buttonText, 
    buttonLink 
}: CallToActionProps) => {
    return (
        <section className="bg-black text-white py-20 sm:py-32 px-10 sm:px-32">
            <MaxContainer>
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-[2.8rem] sm:text-[4.8rem] font-bold mb-6">
                        {headline}
                    </h2>
                    <p className="text-[1.8rem] sm:text-[2.2rem] mb-10">
                        {subheadline}
                    </p>
                    <CustomButton 
                    className="px-12!"
                    link={buttonLink}>
                        {buttonText}
                    </CustomButton>
                </div>
            </MaxContainer>
        </section>
    );
}

export default CallToAction;