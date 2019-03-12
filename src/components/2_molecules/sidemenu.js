import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Link } from "gatsby";

const _ = require("lodash");

const SideMenu = ({ data }) => {
  const groups = data.allPaths.group;

  return (
    <ul>
      {groups.map((group, i) => {
        return (
          <div key={i}>
            <h2>{group.fieldValue}</h2>
            {group.edges.map((link, i) => {
              const n = link.node;
              return (
                <div key={i}>
                  {n.get && (
                    <li className="list-reset">
                      <Link to={`/api/v4/${_.kebabCase(n.name)}#get`}>
                        {n.get.summary}
                      </Link>
                    </li>
                  )}
                  {n.post && (
                    <li className="list-reset">
                      <Link to={`/api/v4/${_.kebabCase(n.name)}#post`}>
                        {n.post.summary}
                      </Link>
                    </li>
                  )}
                  {n.put && (
                    <li className="list-reset">
                      <Link to={`/api/v4/${_.kebabCase(n.name)}#put`}>
                        {n.put.summary}
                      </Link>
                    </li>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </ul>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allPaths {
          group(field: get___tags) {
            field
            fieldValue
            edges {
              node {
                name
                get {
                  summary
                }
                post {
                  summary
                }
                put {
                  summary
                }
              }
            }
          }
        }
      }
    `}
    render={data => <SideMenu data={data} {...props} />}
  />
);
