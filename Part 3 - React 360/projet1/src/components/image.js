import {ReactInstance} from 'react-360-web';
const r360 = new ReactInstance(bundle, parent, {});

r360.compositor.setBackground(
    '../../static_assets/test.png',
    {format:'2D'}
)
