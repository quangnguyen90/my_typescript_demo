// Extend interface
interface Button {
    label: string;
    onClick: () => void;
}

const button: Button = {
    label: 'Submit',
    onClick: () => {
        console.log('click');
    }
}

interface IconButton extends Button {
    icon: string;
}

const addToCartBtn: IconButton = {
    label: 'Add To Cart',
    onClick: () => {
        console.log('click');
    },
    icon: 'cart-icon'
}
