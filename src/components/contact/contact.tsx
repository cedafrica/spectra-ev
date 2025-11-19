import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MaxContainer from "../common/max-container";
import CustomButton from "../common/custom-button";


const ContactForm = () => {

  return (
    <div className="w-full bg-white sm:px-32 py-42 px-10">
      <MaxContainer className="max-w-[900px]">
        <div className="flex sm:pb-60 justify-between">
          <div className="">
            <h2 className="sm:text-[3.2rem] font-semibold">Drop a Message</h2>
            <p className="sm:text-[1.8rem]">The Home of Premium Av</p>
          </div>
          <form action="" className="flex w-[50%] flex-col gap-8">
            <div className="grid grid-cols-2 gap-8 justify-between">
              <Input
                className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
                placeholder="Enter Full Name"
              />
              <Input
                className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
                placeholder="Enter Full Name"
              />
            </div>
            <Input
              className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
              placeholder="Enter Full Name"
            />
            <Textarea
              rows={4}
              className="h-80 pt-8 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
              placeholder="Enter Full Name"
            />

            <CustomButton className="text-black border mt-8 h-25 px-[3.1rem]! border-black">Submit</CustomButton>
          </form>
        </div>
        <div className="flex sm:pt-60 justify-between">
          <div className="">
            <h2 className="sm:text-[3.2rem] font-semibold">Join Our Team</h2>
            <p className="sm:text-[1.8rem] mt-[1.6rem] max-w-110">We are always in search of exceptionally smart and passionate technology enthusiast, with a yearning desire for audiovisual excellence. If that sounds like you, apply to our internship program.</p>
          </div>
          <form action="" className="flex w-[50%] flex-col gap-8">
            <div className="grid grid-cols-2 gap-8 justify-between">
              <Input
                className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
                placeholder="Enter Full Name"
              />
              <Input
                className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
                placeholder="Enter Email"
              />
            </div>
            <Input
              className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
              placeholder="Enter Full Name"
            />
            <Textarea
              rows={4}
              className="h-80 pt-8 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
              placeholder="Enter Full Name"
            />

            <CustomButton className="text-black border mt-8 h-25 px-[3.1rem]! border-black">Submit</CustomButton>
          </form>
        </div>
      </MaxContainer>
    </div>
  );
};

export default ContactForm;