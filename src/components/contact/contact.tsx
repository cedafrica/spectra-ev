import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import MaxContainer from "../common/max-container";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  rows?: number;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const formFields: FormField[] = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter name",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Enter message",
      rows: 4,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace this with your actual backend endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        // Handle error
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-white sm:px-32 py-16 px-10">
      <MaxContainer className="max-w-[900px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Form */}
          <div className="bg-[#F5F5F5] max-w-160 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <div key={field.name} className="space-y-5">
                  <Label htmlFor={field.name} className="text-[1.4rem] sm:text-[1.6rem] font-medium">
                    {field.label}
                  </Label>
                  {field.type === "textarea" ? (
                    <Textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof ContactFormData]}
                      onChange={handleChange}
                      required
                      rows={field.rows}
                      className="bg-white rounded-4xl h-50 pl-5 pt-5text-[1.4rem]! placeholder:text-[1.4rem] focus-visible:ring-0 border-0 resize-none"
                    />
                  ) : (
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof ContactFormData]}
                      onChange={handleChange}
                      required
                      className="bg-white h-17 rounded-4xl pl-5 text-[1.4rem]! placeholder:text-[1.4rem] focus-visible:ring-0 border-0"
                    />
                  )}
                </div>
              ))}


              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                variant={"outline"}
                className="w-full py-8 sm:mt-[3.1rem] border-[1.5px] border-black text-[1.4rem] rounded-4xl"
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>

          {/* Right: World Map Placeholder */}
          <img
            src="/map.png"
            alt="map"
            className="max-w-360  w-full"
          />
        </div>
      </MaxContainer>
    </div>
  );
};

export default ContactForm;