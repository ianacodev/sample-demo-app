import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  state,
} from '@angular/animations';

export const slideUpAnimation = trigger('slideUp', [
  transition('void => *', [
    style({
      opacity: 0.1,
      transform: 'translateY(100px)',
    }),
    animate('600ms ease-in'),
  ]),
]);
