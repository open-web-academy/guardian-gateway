import React from "react";
import { CopyBlock, github } from "react-code-blocks";
import { default as sample } from "./codeblocks";

export default function AnaSocial() {
  return (
    <div>
      <h1>Social Interactions</h1>

      <p>
        NEAR components can natively communicate with the SocialDB smart
        contract (currently deployed at social.near).
      </p>

      <p>
        The SocialDB is a contract that stores key-value pairs, and is used
        mostly to store social-related data, such as posts, likes, or profiles.
      </p>
      <hr className="my-5" />

      <h2>Social.get</h2>
      <p>
        Social.get queries a key from the SocialDB contract and returns the
        data. The key being queried can contain wildcards.
      </p>
      <p>For example:</p>
      <ul>
        <li>
          alice.near/profile/** will match the entire profile data of account
          alice.near.
        </li>
        <li>
          alice.near/profile/* will match all the fields of the profile, but not
          the nested objects.
        </li>
        <li>
          alice.near/profile/name will match only the name field of the profile.
        </li>
        <li>*/widget/* will match all the widgets of all the accounts.</li>
      </ul>
      <CopyBlock
        language={"jsx"}
        text={sample["socialGet"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <h4>Parameters</h4>
      <table class="table">
        <thead>
          <tr>
            <th>param</th>
            <th>required</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>patterns</td>
            <td>required</td>
            <td>string / string[]</td>
            <td>the path pattern(s)</td>
          </tr>
          <tr>
            <td>finality</td>
            <td>optional</td>
            <td>"final" / number</td>
            <td>the block height or finality</td>
          </tr>
          <tr>
            <td>options</td>
            <td>optional</td>
            <td>object</td>
            <td>the options object.</td>
          </tr>
        </tbody>
      </table>
      <h5>Options Object</h5>
      <ul>
        <li>
          <strong>subscribe</strong> (optional): if true, the data will be
          refreshed every 5 seconds.
        </li>
        <li>
          <strong>return_deleted</strong> (optional): whether to return deleted
          values (as null). Default is false.
        </li>
      </ul>
      <p>
        The block height or finality can be used to get the data at a specific
        block height or finality. If the block height or finality is not
        specified, the data will be fetched at the optimistic finality (the
        latest block height).
      </p>
      <p>
        For block height and finality final, instead of calling the NEAR RPC
        directly, the VM uses the Social API Server to fetch the data.
      </p>
      <p>
        Social API server indexes the data for SocialDB and allows fetching the
        data at any block height with additional options.
      </p>
      <p>
        It also allows returning more data than an RPC call because it's not
        restricted by the gas limit. In general, the API server also serves data
        faster than the NEAR RPC, because it doesn't execute the contract code
        in a virtual machine.
      </p>
      <hr className="my-5" />
      <h2>Social.getr</h2>
      <p>
        Social.getr is just a wrapper helper for Social.get, it appends ** to
        each of the path pattern.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["socialGetr"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <h4>Parameters</h4>
      <table class="table">
        <thead>
          <tr>
            <th>param</th>
            <th>required</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>patterns</td>
            <td>required</td>
            <td>string / string[]</td>
            <td>the path pattern(s)</td>
          </tr>
          <tr>
            <td>finality</td>
            <td>optional</td>
            <td>"final" / number</td>
            <td>the block height or finality</td>
          </tr>
          <tr>
            <td>options</td>
            <td>optional</td>
            <td>object</td>
            <td>the options object.</td>
          </tr>
        </tbody>
      </table>
      <h5>Options Object</h5>
      <ul>
        <li>
          <strong>subscribe</strong> (optional): if true, the data will be
          refreshed every 5 seconds.
        </li>
        <li>
          <strong>return_deleted</strong> (optional): whether to return deleted
          values (as null). Default is false.
        </li>
      </ul>

      <hr className="my-5" />
      <h2>Social.keys</h2>
      <p>
        The keys method allows to get the list of keys that match a pattern.
        It's useful for querying the data without reading values.
      </p>
      <p>
        It also has an additional options field that can be used to specify the
        return type and whether to return deleted keys.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["socialKeys"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <h4>Parameters</h4>
      <table class="table">
        <thead>
          <tr>
            <th>param</th>
            <th>required</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>patterns</td>
            <td>required</td>
            <td>string / string[]</td>
            <td>the path pattern(s)</td>
          </tr>
          <tr>
            <td>finality</td>
            <td>optional</td>
            <td>"final" / number</td>
            <td>the block height or finality</td>
          </tr>
          <tr>
            <td>options</td>
            <td>optional</td>
            <td>object</td>
            <td>the options object.</td>
          </tr>
        </tbody>
      </table>
      <h5>Options Object</h5>
      <ul>
        <li>
          <strong>subscribe</strong> (optional): if true, the data will be
          refreshed every 5 seconds.
        </li>
        <li>
          <strong>return_type</strong> (optional): either "History", "True", or
          "BlockHeight". If not specified, it will return the "True".
        </li>
        <li>
          <strong>return_deleted</strong> (optional): whether to return deleted
          values (as null). Default is false.
        </li>
        <li>
          <strong>values_only</strong> (optional): whether to return only values
          (don't include objects). Default is false.
        </li>
      </ul>

      <hr className="my-5" />
      <h2>Social.set</h2>
      <p>
        Takes a data object and commits it to SocialDB. The data object can
        contain multiple keys, and each key can contain multiple values.
      </p>
      <p>
        Importantly, a user can only commit to their own space in SocialDB (e.g.
        alice.near can only write in alice.near/**), except if given explicit
        permission by the owner of another space.
      </p>
      <p>
        Each time a user wants to commit data, they will be prompted to confirm
        the action. On confirming, the user can choose to not be asked again in
        the future.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["socialSet"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <h4>Parameters</h4>
      <table class="table">
        <thead>
          <tr>
            <th>param</th>
            <th>required</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data</td>
            <td>required</td>
            <td>object</td>
            <td>
              the data object to be committed. Similar to CommitButton, it
              shouldn't start with an account ID.
            </td>
          </tr>
          <tr>
            <td>options</td>
            <td>optional</td>
            <td>object</td>
            <td>optional object.</td>
          </tr>
        </tbody>
      </table>
      <h5>Options Object</h5>
      <ul>
        <li>
          <strong>force</strong> (optional): whether to overwrite the data.
        </li>
        <li>
          <strong>onCommit</strong> (optional): function to trigger on
          successful commit. Will pass the data that was written (including
          accountID).
        </li>
        <li>
          <strong>onCancel</strong> (optional): function to trigger if the user
          cancels the commit.
        </li>
      </ul>

      <hr className="my-5" />
      <h2>Social.index</h2>
      <p>
        NEAR Social readily provides an indexer - a service that listens to
        actions in SocialDB, and caches them so they can be retrieved without
        needing to interact with the contract.
      </p>
      <p>
        The indexer is very useful, for example, to rapidly store and retrieve
        information on all comments for a post. Without the indexer, we would
        need to check all entries in the contract to see who answered, surely
        running out of GAS before completion.
      </p>

      <hr className="my-2" />
      <h3>Indexing an Action</h3>
      <p>
        To index an action we need to add the index key to the data being saved,
        within the index key we will save the action being indexed, alongside a
        key and a value that identifies this specific instance.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["socialIndex1"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <h4>Standards</h4>
      <p>
        <strong>Indexing a Post</strong>: To index a post, the standard is to
        save the action post, with {`{key: "main", value: {type: "md"}}`}.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["standards1"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <p>
        <strong>Indexing a Like</strong>: To index a like, the standard is to
        save the action like, with{" "}
        {`{key: object-representing-the-post, value: {type: "like" }}`}.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["standards2"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />

      <hr className="my-2" />
      <h3>Retrieving Indexed Actions</h3>
      <p>
        To retrieve indexed actions we use the Social.index method. It takes the
        action and the key as arguments, and returns an array of all the indexed
        values alongside the blockHeight in which they were indexed, and which
        user made the action.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["socialIndex2"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <h4>Parameters</h4>
      <table class="table">
        <thead>
          <tr>
            <th>param</th>
            <th>required</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>action</td>
            <td>required</td>
            <td>string</td>
            <td>
              is the index_type from the standard, e.g. in the path index/like
              the action is like.
            </td>
          </tr>
          <tr>
            <td>key</td>
            <td>required</td>
            <td>string</td>
            <td>is the inner indexed value from the standard.</td>
          </tr>
          <tr>
            <td>options</td>
            <td>optional</td>
            <td>object</td>
            <td>the options object.</td>
          </tr>
        </tbody>
      </table>
      <h5>Options Object</h5>
      <ul>
        <li>
          <strong>subscribe</strong> (optional): if true, the data will be
          refreshed every 5 seconds.
        </li>
        <li>
          <strong>accountId</strong> (optional): If given, it should either be a
          string or an array of account IDs to filter values by them. Otherwise,
          not filters by account Id.
        </li>
        <li>
          <strong>order</strong> (optional): Either asc or desc. Defaults to
          asc.
        </li>
        <li>
          <strong>limit</strong> (optional): Defaults to 100. The number of
          values to return. Index may return more than index values, if the last
          elements have the same block height.
        </li>
        <li>
          <strong>from</strong> (optional): Defaults to 0 or Max depending on
          order.
        </li>
      </ul>
    </div>
  );
}
