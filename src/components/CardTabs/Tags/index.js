import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(0),
      margin: "0.25rem",
    }
  },
  tagsContainer: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90vw",
      display: "flex",
      whiteSpace: "nowrap",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        height: "5px"
      }
    }
  },
  chip: {
    margin: "0px 10px 10px 0px",
    borderRadius: "5px",
    cursor:"pointer",
  },
}));

const TagCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testId="TagsCard">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            data-testId="TagsCardTitle"
          >
            Popular Tags
          </Typography>
          <div className={classes.tagsContainer}>
            {props.tags.map(function (tag, index) {
              return (
                <Chip
                  size="small"
                  label={tag}
                  id={index}
                  className={classes.chip}
                  data-testId={index === 0 ? "TagsChip" : ""}
                />
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TagCard;
