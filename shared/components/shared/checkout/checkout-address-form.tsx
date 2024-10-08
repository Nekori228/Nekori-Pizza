'use client'

import { Controller, useFormContext } from "react-hook-form"
import { AdressInput } from "../addres-input"
import { FormTextarea } from "../form"
import { WhiteBlock } from "../white-block"
import { ErrorText } from "../error-text"

interface Props {
    className?: string
}

export const CheckoutAddressForm = ({ className }: Props) => {
    const {control} = useFormContext();
    return (
        <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
            <Controller 
                control={control}
                name="address"
                render={({ field, fieldState }) => <>
                    <AdressInput onChange={field.onChange}/>
                    { fieldState.error?.message && <ErrorText text={fieldState.error.message}/>}
                </>}
            />            
            <FormTextarea name={"comment"} className="text-base" placeholder="Коментарий к заказу" rows={5} />
            </div>
        </WhiteBlock>
    )
}

//17:32:40