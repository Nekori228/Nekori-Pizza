'use client';

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals/auth-modal";

interface Props {
    hasSearch?: boolean;
    hasCart?: boolean;
    className?: string;
}

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart = true, className }) => {
    const [openAuthModal , setOpenAuthModal] = React.useState(false);
    const searchParams = useSearchParams();

    React.useEffect(() => {
        if (searchParams.has('paid')) {
            setTimeout(() => {
                toast.success('Заказ успешно оплачен! Ифнормация отправлена на почту.');
            }, 500);
        }
    }, []);

    return (
        <header className={cn('border-b', className)}>
            <div>
                <Container className='flex items-center justify-between py-8'>
                    
                    {/*Левая часть */}
                    <Link href="/">
                        <div className="flex items-center gap-4">
                            <Image src="/logo.png" alt="logo" width={35} height={35}></Image>
                            <div>
                                <h1 className="text-2xl uppercase font-black">Nekori Pizza</h1>
                                <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                            </div>
                        </div> 
                    </Link>
                    
                    {hasSearch &&
                        <div className="mx-10 flex-1">
                            <SearchInput />
                        </div>
                    }

                    {/*Правая часть */}
                    <div className="flex items-center gap-3">
                        <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)}/>

                        <ProfileButton onClickSignIn={() => setOpenAuthModal(true)}/>

                        {hasCart && <CartButton />}
                    </div>
                </Container>
            </div>
        </header>
    );
};

//20:13:50