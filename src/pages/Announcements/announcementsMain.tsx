import InnerNav from "@/components/InnerNav";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { images } from "@/assets/images";
import { GoKebabHorizontal } from "react-icons/go";
import { Image } from 'primereact/image'; // Import the Image component

const AnnouncementsMain = () => {
  return (
    <div className="relative">
      <InnerNav />
      <div className="container-padding">
        <div className="flex justify-center w-full">
          <Card className="max-w-2xl w-full rounded-lg"> 
            <div className="p-4 flex flex-col">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold">Angelo Mapagmahal</span>
                    <span className="-mt-1 text-sm text-gray-400">3 weeks ago</span>
                  </div>
                </div>
                <GoKebabHorizontal />
              </div>
              {/* PrimeReact Image Component */}
              <Image
                src={images.cover1}
                alt="Announcement Image"
                className="mt-4"
                preview 
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsMain;
