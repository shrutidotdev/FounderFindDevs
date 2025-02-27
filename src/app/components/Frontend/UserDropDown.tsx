import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import React from "react";
import { ChevronDown, Heart, User } from 'lucide-react';
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";


interface UserInfo {
  name: string;
  email: string;
  image: string;
}
const UserDropDown = ( { name, email, image } : UserInfo) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {/* Avatar goes here */}
        <Avatar>
          <AvatarImage src={image} alt="@shadcn" />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>

        {/* Chervodown goes here */}
        <ChevronDown size={20} className="text-white " />
         </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel className="flex flex-col  p-3 item-start ">
          
        <span>{name}</span>
        <span>{email}</span>

        </DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem className="flex flex-col  p-3 item-start ">
            {/* User Icon goes here */}
          <Link href="/profile" className="flex text-lg gap-2">
            <User className="mr-2 h-4 w-4" />
            <span> Profile</span>
            </Link>
              {/* Fav Icon goes here */}
            <Link href="/favourite" className="flex text-lg">
            <Heart className="mr-2 h-4 w-4" />
            <span> Favourite</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
