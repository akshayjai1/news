import React from 'react'
import {Scrollbars} from 'react-custom-scrollbars';

// const horizontalTrack = React.memo(() => );

const ht = props => <div {...props}
style={{display: 'none'}}
className="track-horizontal"/>;
const CustomScrollbars = (props) => <Scrollbars  {...props} autoHide
                                                 renderTrackHorizontal={ht}/>;

export default CustomScrollbars;