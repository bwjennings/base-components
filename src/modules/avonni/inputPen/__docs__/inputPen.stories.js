import { InputPen } from '../__examples__/inputPen';

export default {
    title: 'Example/Input Pen',
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['top-toolbar', 'bottom-toolbar']
            },
            defaultValue: 'bottom-toolbar',
            table: {
                defaultValue: { summary: 'bottom-toolbar' }
            }
        },
        mode: {
            control: {
                type: 'select',
                options: ['draw', 'erase']
            },
            defaultValue: 'draw',
            table: {
                defaultValue: { summary: 'draw' }
            }
        },
        color: {
            control: {
                type: 'color'
            }
        },
        label: {
            control: {
                type: 'text'
            }
        },
        fieldLevelHelp: {
            control: {
                type: 'text'
            }
        },
        value: {
            control: {
                type: 'text'
            }
        },
        size: {
            control: {
                type: 'number',
                min: 1
            },
            defaultValue: 2
        },
        disabled: {
            control: {
                type: 'boolean'
            }
        },
        readOnly: {
            control: {
                type: 'boolean'
            }
        },
        required: {
            control: {
                type: 'boolean'
            }
        },
        hideControls: {
            control: {
                type: 'boolean'
            }
        },
        disabledButtons: {
            control: {
                type: 'object'
            }
        },
    }
};

const value = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAfCAYAAAC/MX7XAAACBElEQVRYR+2XT0sbQRjGnzdGCj1I9Sb2mJv4KcSjIEraQjz00ssOTnY+SWY3WYMIHkoppYdqDp7sN+ixnntrKfTPTUE0eUUwNgSTmdnddDdk9zrvn+f3PjPsDGFGP5pRbhTgs+Z84Xjh+IxMYKq2upLiiIFdAPOD/jDjZ9CMll08mxbwUn3PuyKi8jg4pl4tCNrvbQaQa/B7h7cALNrAAGAdRiWb2LyCl3wpLgE8sYEYjCHC90YQPTfl5Q5cKbHau+GvRBRXm5XrcYubBuq87ktxCOAFgAXn5KEEHUZGLmPAKBFKihMGNgA8vY/5C+Yz3dx/5SJcSfGRgW0Acy5542InAq48r8JlOo9z/tICM9SZzFb3pbgYcPk/sTi1+aHDaMWU4bTV/br3AUwvTUWzXLfZ5nf63MCl+ANgKUuw8RcYqgVBK/0LjC8F5xGamblU5kqj0f5mq8/V8RyC07kOW2u2wP04J/C6FBf07/fl2ivNeCbgbSOMXsct6gSupPjMwHrcZinkdUHU0UFrJ2ktJ/C7Zr4U1wDGvpKSinokvwvgnU7g8HBNZ3ClvAp36QuAZxMAHC7ZA/BJh1E17V7O4H0Bft07BtNmmlfNAbjfBJwmOcOmQcUGfxiAFAfMqBJZv5lHafoFoKPD6I1JdBrricHTEJFFjQI8i6ln2bNwPMvpZ9H7FthrgyBtDlzVAAAAAElFTkSuQmCC';

const Template = (args) => InputPen(args);

export const Base = Template.bind({});
Base.args = {
    value: value,
    label: 'Text label',
    fieldLevelHelp: 'Help text',
    disabledButtons: ['clear', 'size'],
    color: '#419fec',
};
