import {ButtonCart} from '../../ui/ButtonCart/ButtonCart';
import "./Description.scss";

export const Description = () => {
    return(
        <div className="description">
            <h2>Description</h2>
            <p>
            Cappuccino is a latte made with more foam than steamed milk,
             often with a sprinkle of cocoa powder or cinnamon on top.
            </p>
            <ButtonCart />
        </div>
    )
}