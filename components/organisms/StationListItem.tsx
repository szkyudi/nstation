import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";

type Props = {
  name: string;
}
export const StationListItem: React.FC<Props> = ({ name }) => (
  <li>
    <Link href={`/stations/${name}`} passHref>
      <ListItemButton component="a">
        <ListItemIcon>
          <LinkIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  </li>
)
