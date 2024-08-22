import { Input, Textarea } from "../../ui"
import { WhiteBlock } from "../white-block"

interface Props {
    className?: string
}

export const CheckoutAddressForm = ({ className }: Props) => {
    return (
        <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
            <Input name="firstName" className="text-base" placeholder="Введите адрес..." />
            <Textarea className="text-base" placeholder="Коментарий к заказу" rows={5}/>
            </div>
        </WhiteBlock>
    )
}