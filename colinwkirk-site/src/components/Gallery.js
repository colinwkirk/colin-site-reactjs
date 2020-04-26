import React from 'react';
import Gallery from 'react-grid-gallery';
import styled from "styled-components";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class MyGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: this.props.images
        };
    }

    render() {
        return (
            <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto",
                textAlign: "center",
                background: "white"
            }}>
                <Gallery
                    images={this.state.images}
                    enableImageSelection={false}
                    enableLightbox={true}
                />
            </div>
        );
    }
}

MyGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};


MyGallery.defaultProps = {
    images: shuffleArray([
        {
                src: 'http://www.colinwkirk.com/wp-content/uploads/2018/08/DSC_1084-Edit-1440p.jpg',
                thumbnail: 'http://www.colinwkirk.com/wp-content/uploads/cache/2018/08/DSC_1084-Edit-1440p/3694696260.jpg',
                thumbnailWidth: 304,
                thumbnailHeight: 205,
                //tags: [{value: "Landscape", title: "Landscape"}],
                caption: "Button Rock Preserve, Lyons, Colorado",
                thumbnailCaption: "Button Rock Preserve, Colorado"

        },{
                src: "http://www.colinwkirk.com/wp-content/uploads/2019/07/ColinKirk-flatirons-Scaled-1440.jpg",
                thumbnail: "http://www.colinwkirk.com/wp-content/uploads/cache/2019/07/ColinKirk-flatirons-Scaled-1440/4289491655.jpg",
                thumbnailWidth: 296,
                thumbnailHeight: 197,
                //tags: [{value: "Landscape", title: "Landscape"}],
                caption: "Clouds Lifting Off the Flatirons, Boulder, Colorado",
                thumbnailCaption: "Flatirons, Colorado"

        },{
                src: 'http://www.colinwkirk.com/wp-content/uploads/2018/07/boulder-mt-sanitas.jpg',
                thumbnail: 'http://www.colinwkirk.com/wp-content/uploads/cache/2018/07/boulder-mt-sanitas/2011865096.jpg',
                thumbnailWidth: 296,
                thumbnailHeight: 197,
                //tags: [{value: "Landscape", title: "Landscape"}],
                caption: "View From Mt. Sanitas, Boulder, Colorado",
                thumbnailCaption: "Mt. Sanitas, Colorado"

        },
        ]
    )
};

//ReactDOM.render(<MyGallery/>, document.getElementById('mygallery'))

export default MyGallery;
