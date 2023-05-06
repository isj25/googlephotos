import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';


export const sideDivFirst = [{
    text : "Photos",
    Icon : <PhotoSizeSelectActualOutlinedIcon />
},{
    text : "Explore",
    Icon : <SearchIcon></SearchIcon>
},
{
    text : "Sharing",
    Icon : <PeopleAltOutlinedIcon/>
}];

export const sideDivSecond = [
{
    text : "Favourites",
    Icon : <StarBorderOutlinedIcon/>
},
{
    text : "Albums",
    Icon : <PhotoAlbumOutlinedIcon/>
},
{
    text : "Utilities",
    Icon : <LibraryAddCheckOutlinedIcon/>
},{
    text : "Archive",
    Icon : <ArchiveOutlinedIcon/>
},{
    text : "Bin",
    Icon : <DeleteOutlineOutlinedIcon/>
}]


export const storageDetails = [{
    text : "Storage",
    Icon : <CloudOutlinedIcon/>
}]