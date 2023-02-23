export const code = `

/**
 *Submitted for verification at ZnxScan.com on 2021-09-05
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IERC721 {
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    function balanceOf(address owner) external view returns (uint256 balance);
    function ownerOf(uint256 tokenId) external view returns (address owner);
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;
    function approve(address to, uint256 tokenId) external;
    function getApproved(uint256 tokenId) external view returns (address operator);
    function setApprovalForAll(address operator, bool _approved) external;
    function isApprovedForAll(address owner, address operator) external view returns (bool);
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes calldata data
    ) external;
}

library Strings {
    function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}

interface IERC721Receiver {
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external returns (bytes4);
}

contract ERC721 is IERC721 {
    using Strings for uint256;

    mapping(uint256 => address) private _owners;
    mapping(address => uint256) private _balances;
    mapping(uint256 => address) private _tokenApprovals;
    mapping(address => mapping(address => bool)) private _operatorApprovals;
    
    function balanceOf(address owner) public view virtual override returns (uint256) {
        require(owner != address(0), "ERC721: balance query for the zero address");
        return _balances[owner];
    }
    
    function ownerOf(uint256 tokenId) public view virtual override returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "ERC721: owner query for nonexistent token");
        return owner;
    }
    
    function _baseURI() internal view virtual returns (string memory) {
        return "";
    }
    
    function approve(address to, uint256 tokenId) public virtual override {
        address owner = ERC721.ownerOf(tokenId);
        require(to != owner, "ERC721: approval to current owner");

        require(
            msg.sender == owner || isApprovedForAll(owner, msg.sender),
            "ERC721: approve caller is not owner nor approved for all"
        );

        _approve(to, tokenId);
    }
    
    function getApproved(uint256 tokenId) public view virtual override returns (address) {
        require(_exists(tokenId), "ERC721: approved query for nonexistent token");

        return _tokenApprovals[tokenId];
    }
    
    function setApprovalForAll(address operator, bool approved) public virtual override {
        require(operator != msg.sender, "ERC721: approve to caller");

        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }
    
    function _isContract(address account) internal view returns (bool) {
        uint256 size;
        assembly {
            size := extcodesize(account)
        }
        return size > 0;
    }
    
    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {
        return _operatorApprovals[owner][operator];
    }
    
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(msg.sender, tokenId), "ERC721: transfer caller is not owner nor approved");

        _transfer(from, to, tokenId);
    }
    
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        safeTransferFrom(from, to, tokenId, "");
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public virtual override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "ERC721: transfer caller is not owner nor approved");
        _safeTransfer(from, to, tokenId, _data);
    }

    /**
     * @dev Safely transfers tokenId token from from to to, checking first that contract recipients
     * are aware of the ERC721 protocol to prevent tokens from being forever locked.
     *
     * _data is additional data, it has no specified format and it is sent in call to to.
     *
     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.
     * implement alternative mechanisms to perform token transfer, such as signature-based.
     *
     * Requirements:
     *
     * - from cannot be the zero address.
     * - to cannot be the zero address.
     * - tokenId token must exist and be owned by from.
     * - If to refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function _safeTransfer(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) internal virtual {
        _transfer(from, to, tokenId);
        require(_checkOnERC721Received(from, to, tokenId, _data), "ERC721: transfer to non ERC721Receiver implementer");
    }

    /**
     * @dev Returns whether tokenId exists.
     *
     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.
     *
     * Tokens start existing when they are minted (_mint),
     * and stop existing when they are burned (_burn).
     */
    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return _owners[tokenId] != address(0);
    }

    /**
     * @dev Returns whether spender is allowed to manage tokenId.
     *
     * Requirements:
     *
     * - tokenId must exist.
     */
    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {
        require(_exists(tokenId), "ERC721: operator query for nonexistent token");
        address owner = ERC721.ownerOf(tokenId);
        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));
    }

    /**
     * @dev Safely mints tokenId and transfers it to to.
     *
     * Requirements:
     *
     * - tokenId must not exist.
     * - If to refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function _safeMint(address to, uint256 tokenId) internal virtual {
        _safeMint(to, tokenId, "");
    }

    /**
     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[_safeMint], with an additional data parameter which is
     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.
     */
    function _safeMint(
        address to,
        uint256 tokenId,
        bytes memory _data
    ) internal virtual {
        _mint(to, tokenId);
        require(
            _checkOnERC721Received(address(0), to, tokenId, _data),
            "ERC721: transfer to non ERC721Receiver implementer"
        );
    }

    /**
     * @dev Mints tokenId and transfers it to to.
     *
     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible
     *
     * Requirements:
     *
     * - tokenId must not exist.
     * - to cannot be the zero address.
     *
     * Emits a {Transfer} event.
     */
    function _mint(address to, uint256 tokenId) internal virtual {
        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");

        _beforeTokenTransfer(address(0), to, tokenId);

        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(address(0), to, tokenId);
    }

    /**
     * @dev Destroys tokenId.
     * The approval is cleared when the token is burned.
     *
     * Requirements:
     *
     * - tokenId must exist.
     *
     * Emits a {Transfer} event.
     */
    function _burn(uint256 tokenId) internal virtual {
        address owner = ERC721.ownerOf(tokenId);

        _beforeTokenTransfer(owner, address(0), tokenId);

        // Clear approvals
        _approve(address(0), tokenId);

        _balances[owner] -= 1;
        delete _owners[tokenId];

        emit Transfer(owner, address(0), tokenId);
    }

    /**
     * @dev Transfers tokenId from from to to.
     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.
     *
     * Requirements:
     *
     * - to cannot be the zero address.
     * - tokenId token must be owned by from.
     *
     * Emits a {Transfer} event.
     */
    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual {
        require(ERC721.ownerOf(tokenId) == from, "ERC721: transfer of token that is not own");
        require(to != address(0), "ERC721: transfer to the zero address");

        _beforeTokenTransfer(from, to, tokenId);

        // Clear approvals from the previous owner
        _approve(address(0), tokenId);

        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }

    /**
     * @dev Approve to to operate on tokenId
     *
     * Emits a {Approval} event.
     */
    function _approve(address to, uint256 tokenId) internal virtual {
        _tokenApprovals[tokenId] = to;
        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);
    }

    /**
     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.
     * The call is not executed if the target address is not a contract.
     *
     * @param from address representing the previous owner of the given token ID
     * @param to target address that will receive the tokens
     * @param tokenId uint256 ID of the token to be transferred
     * @param _data bytes optional data to send along with the call
     * @return bool whether the call correctly returned the expected magic value
     */
    function _checkOnERC721Received(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) private returns (bool) {
        if (_isContract(to)) {
            try IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, _data) returns (bytes4 retval) {
                return retval == IERC721Receiver(to).onERC721Received.selector;
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert("ERC721: transfer to non ERC721Receiver implementer");
                } else {
                    assembly {
                        revert(add(32, reason), mload(reason))
                    }
                }
            }
        } else {
            return true;
        }
    }

    /**
     * @dev Hook that is called before any token transfer. This includes minting
     * and burning.
     *
     * Calling conditions:
     *
     * - When from and to are both non-zero, from's tokenId will be
     * transferred to to.
     * - When from is zero, tokenId will be minted for to.
     * - When to is zero, from's tokenId will be burned.
     * - from and to are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual {}
}







/**
 * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension
 * @dev See https://eips.ethereum.org/EIPS/eip-721
 */
interface IERC721Enumerable is IERC721 {
    /**
     * @dev Returns the total amount of tokens stored by the contract.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns a token ID owned by owner at a given index of its token list.
     * Use along with {balanceOf} to enumerate all of owner's tokens.
     */
    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId);

    /**
     * @dev Returns a token ID at a given index of all the tokens stored by the contract.
     * Use along with {totalSupply} to enumerate all tokens.
     */
    function tokenByIndex(uint256 index) external view returns (uint256);
}


/**
 * @dev This implements an optional extension of {ERC721} defined in the EIP that adds
 * enumerability of all the token ids in the contract as well as all token ids owned by each
 * account.
 */
abstract contract ERC721Enumerable is ERC721, IERC721Enumerable {
    // Mapping from owner to list of owned token IDs
    mapping(address => mapping(uint256 => uint256)) private _ownedTokens;

    // Mapping from token ID to index of the owner tokens list
    mapping(uint256 => uint256) private _ownedTokensIndex;

    // Array with all token ids, used for enumeration
    uint256[] private _allTokens;

    // Mapping from token id to position in the allTokens array
    mapping(uint256 => uint256) private _allTokensIndex;

    /**
     * @dev See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    function tokenOfOwnerByIndex(address owner, uint256 index) public view virtual override returns (uint256) {
        require(index < ERC721.balanceOf(owner), "ERC721Enumerable: owner index out of bounds");
        return _ownedTokens[owner][index];
    }

    /**
     * @dev See {IERC721Enumerable-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _allTokens.length;
    }

    /**
     * @dev See {IERC721Enumerable-tokenByIndex}.
     */
    function tokenByIndex(uint256 index) public view virtual override returns (uint256) {
        require(index < ERC721Enumerable.totalSupply(), "ERC721Enumerable: global index out of bounds");
        return _allTokens[index];
    }

    /**
     * @dev Hook that is called before any token transfer. This includes minting
     * and burning.
     *
     * Calling conditions:
     *
     * - When from and to are both non-zero, from's tokenId will be
     * transferred to to.
     * - When from is zero, tokenId will be minted for to.
     * - When to is zero, from's tokenId will be burned.
     * - from cannot be the zero address.
     * - to cannot be the zero address.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId);

        if (from == address(0)) {
            _addTokenToAllTokensEnumeration(tokenId);
        } else if (from != to) {
            _removeTokenFromOwnerEnumeration(from, tokenId);
        }
        if (to == address(0)) {
            _removeTokenFromAllTokensEnumeration(tokenId);
        } else if (to != from) {
            _addTokenToOwnerEnumeration(to, tokenId);
        }
    }

    /**
     * @dev Private function to add a token to this extension's ownership-tracking data structures.
     * @param to address representing the new owner of the given token ID
     * @param tokenId uint256 ID of the token to be added to the tokens list of the given address
     */
    function _addTokenToOwnerEnumeration(address to, uint256 tokenId) private {
        uint256 length = ERC721.balanceOf(to);
        _ownedTokens[to][length] = tokenId;
        _ownedTokensIndex[tokenId] = length;
    }

    /**
     * @dev Private function to add a token to this extension's token tracking data structures.
     * @param tokenId uint256 ID of the token to be added to the tokens list
     */
    function _addTokenToAllTokensEnumeration(uint256 tokenId) private {
        _allTokensIndex[tokenId] = _allTokens.length;
        _allTokens.push(tokenId);
    }

    /**
     * @dev Private function to remove a token from this extension's ownership-tracking data structures. Note that
     * while the token is not assigned a new owner, the _ownedTokensIndex mapping is _not_ updated: this allows for
     * gas optimizations e.g. when performing a transfer operation (avoiding double writes).
     * This has O(1) time complexity, but alters the order of the _ownedTokens array.
     * @param from address representing the previous owner of the given token ID
     * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address
     */
    function _removeTokenFromOwnerEnumeration(address from, uint256 tokenId) private {
        // To prevent a gap in from's tokens array, we store the last token in the index of the token to delete, and
        // then delete the last slot (swap and pop).

        uint256 lastTokenIndex = ERC721.balanceOf(from) - 1;
        uint256 tokenIndex = _ownedTokensIndex[tokenId];

        // When the token to delete is the last token, the swap operation is unnecessary
        if (tokenIndex != lastTokenIndex) {
            uint256 lastTokenId = _ownedTokens[from][lastTokenIndex];

            _ownedTokens[from][tokenIndex] = lastTokenId; // Move the last token to the slot of the to-delete token
            _ownedTokensIndex[lastTokenId] = tokenIndex; // Update the moved token's index
        }

        // This also deletes the contents at the last position of the array
        delete _ownedTokensIndex[tokenId];
        delete _ownedTokens[from][lastTokenIndex];
    }

    /**
     * @dev Private function to remove a token from this extension's token tracking data structures.
     * This has O(1) time complexity, but alters the order of the _allTokens array.
     * @param tokenId uint256 ID of the token to be removed from the tokens list
     */
    function _removeTokenFromAllTokensEnumeration(uint256 tokenId) private {
        // To prevent a gap in the tokens array, we store the last token in the index of the token to delete, and
        // then delete the last slot (swap and pop).

        uint256 lastTokenIndex = _allTokens.length - 1;
        uint256 tokenIndex = _allTokensIndex[tokenId];

        // When the token to delete is the last token, the swap operation is unnecessary. However, since this occurs so
        // rarely (when the last minted token is burnt) that we still do the swap here to avoid the gas cost of adding
        // an 'if' statement (like in _removeTokenFromOwnerEnumeration)
        uint256 lastTokenId = _allTokens[lastTokenIndex];

        _allTokens[tokenIndex] = lastTokenId; // Move the last token to the slot of the to-delete token
        _allTokensIndex[lastTokenId] = tokenIndex; // Update the moved token's index

        // This also deletes the contents at the last position of the array
        delete _allTokensIndex[tokenId];
        _allTokens.pop();
    }
}

contract rarity is ERC721 {
    uint public next_summoner;
    uint constant xp_per_day = 250e18;
    uint constant DAY = 1 days;
    
    string constant public name = "Rarity Manifested";
    string constant public symbol = "RM";
    
    mapping(uint => uint) public xp;
    mapping(uint => uint) public adventurers_log;
    mapping(uint => uint) public class;
    mapping(uint => uint) public level;
    
    event summoned(address indexed owner, uint class, uint summoner);
    event leveled(address indexed owner, uint level, uint summoner);

    function adventure(uint _summoner) external {
        require(_isApprovedOrOwner(msg.sender, _summoner));
        require(block.timestamp > adventurers_log[_summoner]);
        adventurers_log[_summoner] = block.timestamp + DAY;
        xp[_summoner] += xp_per_day;
    }
    
    function spend_xp(uint _summoner, uint _xp) external {
        require(_isApprovedOrOwner(msg.sender, _summoner));
        xp[_summoner] -= _xp;
    }
    
    function level_up(uint _summoner) external {
        require(_isApprovedOrOwner(msg.sender, _summoner));
        uint _level = level[_summoner];
        uint _xp_required = xp_required(_level);
        xp[_summoner] -= _xp_required;
        level[_summoner] = _level+1;
        emit leveled(msg.sender, _level, _summoner);
    }
    
    function summoner(uint _summoner) external view returns (uint _xp, uint _log, uint _class, uint _level) {
        _xp = xp[_summoner];
        _log = adventurers_log[_summoner];
        _class = class[_summoner];
        _level = level[_summoner];
    }
    
    function summon(uint _class) external {
        require(1 <= _class && _class <= 11);
        uint _next_summoner = next_summoner;
        class[_next_summoner] = _class;
        level[_next_summoner] = 1;
        _safeMint(msg.sender, _next_summoner);
        emit summoned(msg.sender, _class, _next_summoner);
        next_summoner++;
    }
    
    function xp_required(uint curent_level) public pure returns (uint xp_to_next_level) {
        xp_to_next_level = curent_level * 1000e18;
        for (uint i = 1; i < curent_level; i++) {
            xp_to_next_level += i * 1000e18;
        }
    }
    
    function tokenURI(uint256 _summoner) public view returns (string memory) {
        string[7] memory parts;
        parts[0] = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350"><style>.base { fill: white; font-family: serif; font-size: 14px; }</style><rect width="100%" height="100%" fill="black" /><text x="10" y="20" class="base">';

        parts[1] = string(abi.encodePacked("class", " ", classes(class[_summoner])));

        parts[2] = '</text><text x="10" y="40" class="base">';

        parts[3] = string(abi.encodePacked("level", " ", toString(level[_summoner])));

        parts[4] = '</text><text x="10" y="60" class="base">';

        parts[5] = string(abi.encodePacked("xp", " ", toString(xp[_summoner]/1e18)));

        parts[6] = '</text></svg>';

        string memory output = string(abi.encodePacked(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5], parts[6]));
        
        string memory json = Base64.encode(bytes(string(abi.encodePacked('{"name": "summoner #', toString(_summoner), '", "description": "Rarity is achieved via an active economy, summoners must level, gain feats, learn spells, to be able to craft gear. This allows for market driven rarity while allowing an ever growing economy. Feats, spells, and summoner gear is ommitted as part of further expansions.", "image": "data:image/svg+xml;base64,', Base64.encode(bytes(output)), '"}'))));
        output = string(abi.encodePacked('data:application/json;base64,', json));

        return output;
    }
    
    function classes(uint id) public pure returns (string memory description) {
        if (id == 1) {
            return "Barbarian";
        } else if (id == 2) {
            return "Bard";
        } else if (id == 3) {
            return "Cleric";
        } else if (id == 4) {
            return "Druid";
        } else if (id == 5) {
            return "Fighter";
        } else if (id == 6) {
            return "Monk";
        } else if (id == 7) {
            return "Paladin";
        } else if (id == 8) {
            return "Ranger";
        } else if (id == 9) {
            return "Rogue";
        } else if (id == 10) {
            return "Sorcerer";
        } else if (id == 11) {
            return "Wizard";
        }
    }
    
    function toString(uint256 value) internal pure returns (string memory) {
    // Inspired by OraclizeAPI's implementation - MIT license
    // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}

/// [MIT License]
/// @title Base64
/// @notice Provides a function for encoding some bytes in base64
/// @author Brecht Devos <brecht@loopring.org>
library Base64 {
    bytes internal constant TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    /// @notice Encodes some bytes to the base64 representation
    function encode(bytes memory data) internal pure returns (string memory) {
        uint256 len = data.length;
        if (len == 0) return "";

        // multiply by 4/3 rounded up
        uint256 encodedLen = 4 * ((len + 2) / 3);

        // Add some extra buffer at the end
        bytes memory result = new bytes(encodedLen + 32);

        bytes memory table = TABLE;

        assembly {
            let tablePtr := add(table, 1)
            let resultPtr := add(result, 32)

            for {
                let i := 0
            } lt(i, len) {

            } {
                i := add(i, 3)
                let input := and(mload(add(data, i)), 0xffffff)

                let out := mload(add(tablePtr, and(shr(18, input), 0x3F)))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(12, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(6, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(input, 0x3F))), 0xFF))
                out := shl(224, out)

                mstore(resultPtr, out)

                resultPtr := add(resultPtr, 4)
            }

            switch mod(len, 3)
            case 1 {
                mstore(sub(resultPtr, 2), shl(240, 0x3d3d))
            }
            case 2 {
                mstore(sub(resultPtr, 1), shl(248, 0x3d))
            }

            mstore(result, encodedLen)
        }

        return string(result);
    }
}
`

export const abi = `
[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"summoner","type":"uint256"}],"name":"leveled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"class","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"summoner","type":"uint256"}],"name":"summoned","type":"event"},{"inputs":[{"internalType":"uint256","name":"_summoner","type":"uint256"}],"name":"adventure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"adventurers_log","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"class","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"classes","outputs":[{"internalType":"string","name":"description","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"level","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_summoner","type":"uint256"}],"name":"level_up","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"next_summoner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_summoner","type":"uint256"},{"internalType":"uint256","name":"_xp","type":"uint256"}],"name":"spend_xp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_class","type":"uint256"}],"name":"summon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_summoner","type":"uint256"}],"name":"summoner","outputs":[{"internalType":"uint256","name":"_xp","type":"uint256"},{"internalType":"uint256","name":"_log","type":"uint256"},{"internalType":"uint256","name":"_class","type":"uint256"},{"internalType":"uint256","name":"_level","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_summoner","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"xp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"curent_level","type":"uint256"}],"name":"xp_required","outputs":[{"internalType":"uint256","name":"xp_to_next_level","type":"uint256"}],"stateMutability":"pure","type":"function"}]
`

export const contractCreationCode = `
608060405234801561001057600080fd5b5061207a806100206000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806390249448116100c3578063b88d4fde1161007c578063b88d4fde14610335578063c363b9eb14610348578063c87b56dd146103a9578063e58410bb146103bc578063e985e9c5146103cf578063eed25028146103f257600080fd5b806390249448146102a857806394b69ffa146102bb57806395d89b41146102db578063a22cb465146102fc578063aca10be31461030f578063b00b52f11461032257600080fd5b806323b872dd1161011557806323b872dd146102295780633613a9f41461023c57806342842e0e1461025c5780636352211e1461026f57806370a0823114610282578063817dbe9f1461029557600080fd5b8063035d9f2a1461015d57806305c58df21461017257806306fdde03146101a557806307b018ef146101e2578063081812fc146101eb578063095ea7b314610216575b600080fd5b61017061016b3660046118d6565b610412565b005b6101926101803660046118d6565b60086020526000908152604090205481565b6040519081526020015b60405180910390f35b6101d56040518060400160405280601181526020017014985c9a5d1e4813585b9a59995cdd1959607a1b81525081565b60405161019c9190611cec565b61019260045481565b6101fe6101f93660046118d6565b6104ad565b6040516001600160a01b03909116815260200161019c565b610170610224366004611882565b610547565b61017061023736600461172e565b61065d565b61019261024a3660046118d6565b60076020526000908152604090205481565b61017061026a36600461172e565b61068e565b6101fe61027d3660046118d6565b6106a9565b6101926102903660046116d9565b610726565b6101d56102a33660046118d6565b6107ad565b6101706102b63660046118d6565b61098e565b6101926102c93660046118d6565b60056020526000908152604090205481565b6101d560405180604001604052806002815260200161524d60f01b81525081565b61017061030a366004611846565b610a43565b61019261031d3660046118d6565b610b08565b6101706103303660046118d6565b610b61565b61017061034336600461176a565b610bd8565b6103896103563660046118d6565b60009081526005602090815260408083205460068352818420546007845282852054600890945291909320549293909290565b60408051948552602085019390935291830152606082015260800161019c565b6101d56103b73660046118d6565b610c10565b6101706103ca3660046118ef565b610e1a565b6103e26103dd3660046116fb565b610e54565b604051901515815260200161019c565b6101926104003660046118d6565b60066020526000908152604090205481565b806001111580156104245750600b8111155b61042d57600080fd5b600454600081815260076020908152604080832085905560089091529020600190556104593382610e82565b604080518381526020810183905233917f13635f4880051027279fad8cb34c7f6b430bee464ad05f777d9abff668fc1be8910160405180910390a2600480549060006104a483611e30565b91905055505050565b6000818152602081905260408120546001600160a01b031661052b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600260205260409020546001600160a01b031690565b6000610552826106a9565b9050806001600160a01b0316836001600160a01b031614156105c05760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610522565b336001600160a01b03821614806105dc57506105dc8133610e54565b61064e5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610522565b6106588383610ea0565b505050565b6106673382610f0e565b6106835760405162461bcd60e51b815260040161052290611d51565b610658838383610fe5565b61065883838360405180602001604052806000815250610bd8565b6000818152602081905260408120546001600160a01b0316806107205760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610522565b92915050565b60006001600160a01b0382166107915760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610522565b506001600160a01b031660009081526001602052604090205490565b606081600114156107dd5750506040805180820190915260098152682130b93130b934b0b760b91b602082015290565b816002141561080657505060408051808201909152600481526310985c9960e21b602082015290565b8160031415610831575050604080518082019091526006815265436c6572696360d01b602082015290565b816004141561085b575050604080518082019091526005815264111c9d5a5960da1b602082015290565b81600514156108875750506040805180820190915260078152662334b3b43a32b960c91b602082015290565b81600614156108b05750506040805180820190915260048152634d6f6e6b60e01b602082015290565b81600714156108dc5750506040805180820190915260078152662830b630b234b760c91b602082015290565b81600814156109075750506040805180820190915260068152652930b733b2b960d11b602082015290565b8160091415610931575050604080518082019091526005815264526f67756560d81b602082015290565b81600a141561095e57505060408051808201909152600881526729b7b931b2b932b960c11b602082015290565b81600b141561098957505060408051808201909152600681526515da5e985c9960d21b602082015290565b919050565b6109983382610f0e565b6109a157600080fd5b600081815260086020526040812054906109ba82610b08565b9050806005600085815260200190815260200160002060008282546109df9190611ded565b909155506109f09050826001611da2565b60008481526008602090815260409182902092909255805184815291820185905233917f943b00a67689342d89989c0bf7b5f4840b8c5a29e1383dc391a903626b3327c0910160405180910390a2505050565b6001600160a01b038216331415610a9c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610522565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000610b1d82683635c9adc5dea00000611dce565b905060015b82811015610b5b57610b3d81683635c9adc5dea00000611dce565b610b479083611da2565b915080610b5381611e30565b915050610b22565b50919050565b610b6b3382610f0e565b610b7457600080fd5b6000818152600660205260409020544211610b8e57600080fd5b610b9b6201518042611da2565b600082815260066020908152604080832093909355600590529081208054680d8d726b7177a800009290610bd0908490611da2565b909155505050565b610be23383610f0e565b610bfe5760405162461bcd60e51b815260040161052290611d51565b610c0a84848484611189565b50505050565b6060610c1a61169b565b60405180610120016040528060fd8152602001611ee060fd91398152600083815260076020526040902054610c4e906107ad565b604051602001610c5e9190611a9b565b60408051601f19818403018152919052816001602002018190525060405180606001604052806028815260200161201d60289139604080830191909152600084815260086020522054610cb0906111bc565b604051602001610cc09190611a64565b60408051808303601f19018152918152606080840192909252805191820190526028808252611eb860208301396080820152600083815260056020526040902054610d1d90610d1890670de0b6b3a764000090611dba565b6111bc565b604051602001610d2d91906119eb565b60408051601f1981840301815291815260a0830191825280518082018252600d81526c1e17ba32bc3a1f1e17b9bb339f60991b60208083019190915260c08501829052845181860151868501516060880151608089015197519651600098610da19895979496939592949093909101611959565b60405160208183030381529060405290506000610dee610dc0866111bc565b610dc9846112ba565b604051602001610dda929190611ac5565b6040516020818303038152906040526112ba565b905080604051602001610e019190611a1f565b60408051601f1981840301815291905295945050505050565b610e243383610f0e565b610e2d57600080fd5b60008281526005602052604081208054839290610e4b908490611ded565b90915550505050565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205460ff1690565b610e9c828260405180602001604052806000815250611420565b5050565b600081815260026020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610ed5826106a9565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152602081905260408120546001600160a01b0316610f875760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610522565b6000610f92836106a9565b9050806001600160a01b0316846001600160a01b03161480610fcd5750836001600160a01b0316610fc2846104ad565b6001600160a01b0316145b80610fdd5750610fdd8185610e54565b949350505050565b826001600160a01b0316610ff8826106a9565b6001600160a01b0316146110605760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610522565b6001600160a01b0382166110c25760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610522565b6110cd600082610ea0565b6001600160a01b038316600090815260016020819052604082208054919290916110f8908490611ded565b90915550506001600160a01b03821660009081526001602081905260408220805491929091611128908490611da2565b909155505060008181526020819052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b611194848484610fe5565b6111a084848484611453565b610c0a5760405162461bcd60e51b815260040161052290611cff565b6060816111e05750506040805180820190915260018152600360fc1b602082015290565b8160005b811561120a57806111f481611e30565b91506112039050600a83611dba565b91506111e4565b60008167ffffffffffffffff81111561122557611225611ea1565b6040519080825280601f01601f19166020018201604052801561124f576020820181803683370190505b5090505b8415610fdd57611264600183611ded565b9150611271600a86611e4b565b61127c906030611da2565b60f81b81838151811061129157611291611e8b565b60200101906001600160f81b031916908160001a9053506112b3600a86611dba565b9450611253565b8051606090806112da575050604080516020810190915260008152919050565b600060036112e9836002611da2565b6112f39190611dba565b6112fe906004611dce565b9050600061130d826020611da2565b67ffffffffffffffff81111561132557611325611ea1565b6040519080825280601f01601f19166020018201604052801561134f576020820181803683370190505b5090506000604051806060016040528060408152602001611fdd604091399050600181016020830160005b868110156113db576003818a01810151603f601282901c8116860151600c83901c8216870151600684901c831688015192909316870151600891821b60ff94851601821b92841692909201901b91160160e01b83526004909201910161137a565b5060038606600181146113f5576002811461140657611412565b613d3d60f01b600119830152611412565b603d60f81b6000198301525b505050918152949350505050565b61142a8383611557565b6114376000848484611453565b6106585760405162461bcd60e51b815260040161052290611cff565b6000833b1561154c57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061148e903390899088908890600401611caf565b602060405180830381600087803b1580156114a857600080fd5b505af19250505080156114d8575060408051601f3d908101601f191682019092526114d5918101906118ac565b60015b611532573d808015611506576040519150601f19603f3d011682016040523d82523d6000602084013e61150b565b606091505b50805161152a5760405162461bcd60e51b815260040161052290611cff565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610fdd565b506001949350505050565b6001600160a01b0382166115ad5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610522565b6000818152602081905260409020546001600160a01b0316156116125760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610522565b6001600160a01b0382166000908152600160208190526040822080549192909161163d908490611da2565b909155505060008181526020819052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6040518060e001604052806007905b60608152602001906001900390816116aa5790505090565b80356001600160a01b038116811461098957600080fd5b6000602082840312156116eb57600080fd5b6116f4826116c2565b9392505050565b6000806040838503121561170e57600080fd5b611717836116c2565b9150611725602084016116c2565b90509250929050565b60008060006060848603121561174357600080fd5b61174c846116c2565b925061175a602085016116c2565b9150604084013590509250925092565b6000806000806080858703121561178057600080fd5b611789856116c2565b9350611797602086016116c2565b925060408501359150606085013567ffffffffffffffff808211156117bb57600080fd5b818701915087601f8301126117cf57600080fd5b8135818111156117e1576117e1611ea1565b604051601f8201601f19908116603f0116810190838211818310171561180957611809611ea1565b816040528281528a602084870101111561182257600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561185957600080fd5b611862836116c2565b91506020830135801515811461187757600080fd5b809150509250929050565b6000806040838503121561189557600080fd5b61189e836116c2565b946020939093013593505050565b6000602082840312156118be57600080fd5b81516001600160e01b0319811681146116f457600080fd5b6000602082840312156118e857600080fd5b5035919050565b6000806040838503121561190257600080fd5b50508035926020909101359150565b60008151808452611929816020860160208601611e04565b601f01601f19169290920160200192915050565b6000815161194f818560208601611e04565b9290920192915050565b60008851602061196c8285838e01611e04565b89519184019161197f8184848e01611e04565b89519201916119918184848d01611e04565b88519201916119a38184848c01611e04565b87519201916119b58184848b01611e04565b86519201916119c78184848a01611e04565b85519201916119d98184848901611e04565b919091019a9950505050505050505050565b61078760f41b8152600160fd1b600282015260008251611a12816003850160208701611e04565b9190910160030192915050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815260008251611a5781601d850160208701611e04565b91909101601d0192915050565b641b195d995b60da1b8152600160fd1b600582015260008251611a8e816006850160208701611e04565b9190910160060192915050565b64636c61737360d81b8152600160fd1b600582015260008251611a8e816006850160208701611e04565b737b226e616d65223a202273756d6d6f6e6572202360601b81528251600090611af5816014850160208801611e04565b7f222c20226465736372697074696f6e223a2022526172697479206973206163686014918401918201527f69657665642076696120616e206163746976652065636f6e6f6d792c2073756d60348201527f6d6f6e657273206d757374206c6576656c2c206761696e2066656174732c206c60548201527f6561726e207370656c6c732c20746f2062652061626c6520746f20637261667460748201527f20676561722e205468697320616c6c6f777320666f72206d61726b657420647260948201527f6976656e20726172697479207768696c6520616c6c6f77696e6720616e20657660b48201527f65722067726f77696e672065636f6e6f6d792e2046656174732c207370656c6c60d48201527f732c20616e642073756d6d6f6e65722067656172206973206f6d6d697474656460f48201527f2061732070617274206f66206675727468657220657870616e73696f6e732e226101148201527f2c2022696d616765223a2022646174613a696d6167652f7376672b786d6c3b6261013482015265185cd94d8d0b60d21b610154820152611ca6611c9861015a83018661193d565b61227d60f01b815260020190565b95945050505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611ce290830184611911565b9695505050505050565b6020815260006116f46020830184611911565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611db557611db5611e5f565b500190565b600082611dc957611dc9611e75565b500490565b6000816000190483118215151615611de857611de8611e5f565b500290565b600082821015611dff57611dff611e5f565b500390565b60005b83811015611e1f578181015183820152602001611e07565b83811115610c0a5750506000910152565b6000600019821415611e4457611e44611e5f565b5060010190565b600082611e5a57611e5a611e75565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe3c2f746578743e3c7465787420783d2231302220793d2236302220636c6173733d2262617365223e3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323030302f73766722207072657365727665417370656374526174696f3d22784d696e594d696e206d656574222076696577426f783d223020302033353020333530223e3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e742d66616d696c793a2073657269663b20666f6e742d73697a653a20313470783b207d3c2f7374796c653e3c726563742077696474683d223130302522206865696768743d2231303025222066696c6c3d22626c61636b22202f3e3c7465787420783d2231302220793d2232302220636c6173733d2262617365223e4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f3c2f746578743e3c7465787420783d2231302220793d2234302220636c6173733d2262617365223ea264697066735822122011e1f8f26dc82902d166426d6b23655329087056813aa961c66fc77e60ee219464736f6c63430008070033
`

export const DeployedByteCodeSourceMapCode = `
20432:5335:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22071:350;;;;;;:::i;:::-;;:::i;:::-;;20811:34;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;15683:25:1;;;15671:2;15656:18;20811:34:0;;;;;;;;20576:49;;;;;;;;;;;;;;;-1:-1:-1;;;20576:49:0;;;;;;;;;;;;:::i;20465:25::-;;;;;;3289:221;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;9386:32:1;;;9368:51;;9356:2;9341:18;3289:221:0;9222:203:1;2870:407:0;;;;;;:::i;:::-;;:::i;4208:337::-;;;;;;:::i;:::-;;:::i;20770:34::-;;;;;;:::i;:::-;;;;;;;;;;;;;;4557:185;;;;;;:::i;:::-;;:::i;2513:239::-;;;;;;:::i;:::-;;:::i;2293:208::-;;;;;;:::i;:::-;;:::i;24277:760::-;;;;;;:::i;:::-;;:::i;21454:335::-;;;;;;:::i;:::-;;:::i;20681:31::-;;;;;;:::i;:::-;;;;;;;;;;;;;;20632:36;;;;;;;;;;;;;;;-1:-1:-1;;;20632:36:0;;;;;3522:289;;;;;;:::i;:::-;;:::i;22433:252::-;;;;;;:::i;:::-;;:::i;21001:276::-;;;;;;:::i;:::-;;:::i;4813:326::-;;;;;;:::i;:::-;;:::i;21801:258::-;;;;;;:::i;:::-;21858:8;21922:13;;;:2;:13;;;;;;;;;21953:15;:26;;;;;;21999:5;:16;;;;;;22035:5;:16;;;;;;;;21922:13;;21953:26;;22035:16;21801:258;;;;;16203:25:1;;;16259:2;16244:18;;16237:34;;;;16287:18;;;16280:34;16345:2;16330:18;;16323:34;16190:3;16175:19;21801:258:0;15972:391:1;22697:1568:0;;;;;;:::i;:::-;;:::i;21289:153::-;;;;;;:::i;:::-;;:::i;4032:164::-;;;;;;:::i;:::-;;:::i;:::-;;;10088:14:1;;10081:22;10063:41;;10051:2;10036:18;4032:164:0;9923:187:1;20719:44:0;;;;;;:::i;:::-;;;;;;;;;;;;;;22071:350;22133:6;22128:1;:11;;:27;;;;;22153:2;22143:6;:12;;22128:27;22120:36;;;;;;22189:13;;22167:19;22213:21;;;:5;:21;;;;;;;;:30;;;22254:5;:21;;;;;22278:1;22254:25;;22290:37;22300:10;22189:13;22290:9;:37::i;:::-;22343:44;;;15893:25:1;;;15949:2;15934:18;;15927:34;;;22352:10:0;;22343:44;;15866:18:1;22343:44:0;;;;;;;22398:13;:15;;;:13;:15;;;:::i;:::-;;;;;;22109:312;22071:350;:::o;3289:221::-;3365:7;6738:16;;;;;;;;;;;-1:-1:-1;;;;;6738:16:0;3385:73;;;;-1:-1:-1;;;3385:73:0;;14096:2:1;3385:73:0;;;14078:21:1;14135:2;14115:18;;;14108:30;14174:34;14154:18;;;14147:62;-1:-1:-1;;;14225:18:1;;;14218:42;14277:19;;3385:73:0;;;;;;;;;-1:-1:-1;3478:24:0;;;;:15;:24;;;;;;-1:-1:-1;;;;;3478:24:0;;3289:221::o;2870:407::-;2951:13;2967:23;2982:7;2967:14;:23::i;:::-;2951:39;;3015:5;-1:-1:-1;;;;;3009:11:0;:2;-1:-1:-1;;;;;3009:11:0;;;3001:57;;;;-1:-1:-1;;;3001:57:0;;14919:2:1;3001:57:0;;;14901:21:1;14958:2;14938:18;;;14931:30;14997:34;14977:18;;;14970:62;-1:-1:-1;;;15048:18:1;;;15041:31;15089:19;;3001:57:0;14717:397:1;3001:57:0;3093:10;-1:-1:-1;;;;;3093:19:0;;;;:58;;;3116:35;3133:5;3140:10;3116:16;:35::i;:::-;3071:164;;;;-1:-1:-1;;;3071:164:0;;12489:2:1;3071:164:0;;;12471:21:1;12528:2;12508:18;;;12501:30;12567:34;12547:18;;;12540:62;12638:26;12618:18;;;12611:54;12682:19;;3071:164:0;12287:420:1;3071:164:0;3248:21;3257:2;3261:7;3248:8;:21::i;:::-;2940:337;2870:407;;:::o;4208:337::-;4403:39;4422:10;4434:7;4403:18;:39::i;:::-;4395:101;;;;-1:-1:-1;;;4395:101:0;;;;;;;:::i;:::-;4509:28;4519:4;4525:2;4529:7;4509:9;:28::i;4557:185::-;4695:39;4712:4;4718:2;4722:7;4695:39;;;;;;;;;;;;:16;:39::i;2513:239::-;2585:7;2621:16;;;;;;;;;;;-1:-1:-1;;;;;2621:16:0;2656:19;2648:73;;;;-1:-1:-1;;;2648:73:0;;13325:2:1;2648:73:0;;;13307:21:1;13364:2;13344:18;;;13337:30;13403:34;13383:18;;;13376:62;-1:-1:-1;;;13454:18:1;;;13447:39;13503:19;;2648:73:0;13123:405:1;2648:73:0;2739:5;2513:239;-1:-1:-1;;2513:239:0:o;2293:208::-;2365:7;-1:-1:-1;;;;;2393:19:0;;2385:74;;;;-1:-1:-1;;;2385:74:0;;12914:2:1;2385:74:0;;;12896:21:1;12953:2;12933:18;;;12926:30;12992:34;12972:18;;;12965:62;-1:-1:-1;;;13043:18:1;;;13036:40;13093:19;;2385:74:0;12712:406:1;2385:74:0;-1:-1:-1;;;;;;2477:16:0;;;;;:9;:16;;;;;;;2293:208::o;24277:760::-;24324:25;24366:2;24372:1;24366:7;24362:668;;;-1:-1:-1;;24390:18:0;;;;;;;;;;;;-1:-1:-1;;;24390:18:0;;;;;24277:760::o;24362:668::-;24430:2;24436:1;24430:7;24426:604;;;-1:-1:-1;;24454:13:0;;;;;;;;;;;;-1:-1:-1;;;24454:13:0;;;;;24277:760::o;24426:604::-;24489:2;24495:1;24489:7;24485:545;;;-1:-1:-1;;24513:15:0;;;;;;;;;;;;-1:-1:-1;;;24513:15:0;;;;;24277:760::o;24485:545::-;24550:2;24556:1;24550:7;24546:484;;;-1:-1:-1;;24574:14:0;;;;;;;;;;;;-1:-1:-1;;;24574:14:0;;;;;24277:760::o;24546:484::-;24610:2;24616:1;24610:7;24606:424;;;-1:-1:-1;;24634:16:0;;;;;;;;;;;;-1:-1:-1;;;24634:16:0;;;;;24277:760::o;24606:424::-;24672:2;24678:1;24672:7;24668:362;;;-1:-1:-1;;24696:13:0;;;;;;;;;;;;-1:-1:-1;;;24696:13:0;;;;;24277:760::o;24668:362::-;24731:2;24737:1;24731:7;24727:303;;;-1:-1:-1;;24755:16:0;;;;;;;;;;;;-1:-1:-1;;;24755:16:0;;;;;24277:760::o;24727:303::-;24793:2;24799:1;24793:7;24789:241;;;-1:-1:-1;;24817:15:0;;;;;;;;;;;;-1:-1:-1;;;24817:15:0;;;;;24277:760::o;24789:241::-;24854:2;24860:1;24854:7;24850:180;;;-1:-1:-1;;24878:14:0;;;;;;;;;;;;-1:-1:-1;;;24878:14:0;;;;;24277:760::o;24850:180::-;24914:2;24920;24914:8;24910:120;;;-1:-1:-1;;24939:17:0;;;;;;;;;;;;-1:-1:-1;;;24939:17:0;;;;;24277:760::o;24910:120::-;24978:2;24984;24978:8;24974:56;;;-1:-1:-1;;25003:15:0;;;;;;;;;;;;-1:-1:-1;;;25003:15:0;;;;;24277:760::o;24974:56::-;24277:760;;;:::o;21454:335::-;21516:41;21535:10;21547:9;21516:18;:41::i;:::-;21508:50;;;;;;21569:11;21583:16;;;:5;:16;;;;;;;21630:19;21583:16;21630:11;:19::i;:::-;21610:39;;21677:12;21660:2;:13;21663:9;21660:13;;;;;;;;;;;;:29;;;;;;;:::i;:::-;;;;-1:-1:-1;21719:8:0;;-1:-1:-1;21719:6:0;21726:1;21719:8;:::i;:::-;21700:16;;;;:5;:16;;;;;;;;;:27;;;;21743:38;;15893:25:1;;;15934:18;;;15927:34;;;21751:10:0;;21743:38;;15866:18:1;21743:38:0;;;;;;;21497:292;;21454:335;:::o;3522:289::-;-1:-1:-1;;;;;3625:22:0;;3637:10;3625:22;;3617:60;;;;-1:-1:-1;;;3617:60:0;;11722:2:1;3617:60:0;;;11704:21:1;11761:2;11741:18;;;11734:30;11800:27;11780:18;;;11773:55;11845:18;;3617:60:0;11520:349:1;3617:60:0;3709:10;3690:30;;;;:18;:30;;;;;;;;-1:-1:-1;;;;;3690:40:0;;;;;;;;;;;;:51;;-1:-1:-1;;3690:51:0;;;;;;;;;;3757:46;;10063:41:1;;;3690:40:0;;3709:10;3757:46;;10036:18:1;3757:46:0;;;;;;;3522:289;;:::o;22433:252::-;22494:21;22547:22;:12;22562:7;22547:22;:::i;:::-;22528:41;-1:-1:-1;22594:1:0;22580:98;22601:12;22597:1;:16;22580:98;;;22655:11;:1;22659:7;22655:11;:::i;:::-;22635:31;;;;:::i;:::-;;-1:-1:-1;22615:3:0;;;;:::i;:::-;;;;22580:98;;;;22433:252;;;:::o;21001:276::-;21064:41;21083:10;21095:9;21064:18;:41::i;:::-;21056:50;;;;;;21143:26;;;;:15;:26;;;;;;21125:15;:44;21117:53;;;;;;21210:21;20557:6;21210:15;:21;:::i;:::-;21181:26;;;;:15;:26;;;;;;;;:50;;;;21242:2;:13;;;;;:27;;20524:6;;21181:26;21242:27;;20524:6;;21242:27;:::i;:::-;;;;-1:-1:-1;;;21001:276:0:o;4813:326::-;4988:39;5007:10;5019:7;4988:18;:39::i;:::-;4980:101;;;;-1:-1:-1;;;4980:101:0;;;;;;;:::i;:::-;5092:39;5106:4;5112:2;5116:7;5125:5;5092:13;:39::i;:::-;4813:326;;;;:::o;22697:1568::-;22755:13;22781:22;;:::i;:::-;22814:266;;;;;;;;;;;;;;;;;;;22820:1;23150:16;;;:5;22814:8;23150:16;;;;;23142:25;;:7;:25::i;:::-;23111:57;;;;;;;;:::i;:::-;;;;-1:-1:-1;;23111:57:0;;;;;;;;;23093:5;23099:1;23093:8;;;:76;;;;23182:53;;;;;;;;;;;;;;;;;:8;;;;:53;;;;23306:16;;;;:5;23182:8;23306:16;;;23297:26;;:8;:26::i;:::-;23266:58;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;23266:58:0;;;;;;23248:8;;;;:77;;;;23338:53;;;;;;;;;;;;23248:8;23338:53;;;:8;;;:53;23459:13;;;;:2;23338:8;23459:13;;;;;23450:28;;23459:18;;23473:4;;23459:18;:::i;:::-;23450:8;:28::i;:::-;23422:57;;;;;;;;:::i;:::-;;;;-1:-1:-1;;23422:57:0;;;;;;;;;23404:8;;;:76;;;23493:26;;;;;;;;;;-1:-1:-1;;;23404:8:0;23493:26;;;;;;;:8;;;:26;;;23579:8;;23589;;;;23599;;;;-1:-1:-1;;;23609:8:0;23619;;;;23629;;23562:86;;-1:-1:-1;;23562:86:0;;23579:8;;23589;;23599;;23609;;23619;;23493:26;;23562:86;;:::i;:::-;;;;;;;;;;;;;23532:117;;23670:18;23691:457;23759:19;23768:9;23759:8;:19::i;:::-;24110:28;24130:6;24110:13;:28::i;:::-;23718:427;;;;;;;;;:::i;:::-;;;;;;;;;;;;;23691:13;:457::i;:::-;23670:478;;24225:4;24175:55;;;;;;;;:::i;:::-;;;;-1:-1:-1;;24175:55:0;;;;;;;;;;22697:1568;-1:-1:-1;;;;;22697:1568:0:o;21289:153::-;21361:41;21380:10;21392:9;21361:18;:41::i;:::-;21353:50;;;;;;21414:13;;;;:2;:13;;;;;:20;;21431:3;;21414:13;:20;;21431:3;;21414:20;:::i;:::-;;;;-1:-1:-1;;;;21289:153:0:o;4032:164::-;-1:-1:-1;;;;;4153:25:0;;;4129:4;4153:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;4032:164::o;7633:110::-;7709:26;7719:2;7723:7;7709:26;;;;;;;;;;;;:9;:26::i;:::-;7633:110;;:::o;10631:174::-;10706:24;;;;:15;:24;;;;;:29;;-1:-1:-1;;;;;;10706:29:0;-1:-1:-1;;;;;10706:29:0;;;;;;;;:24;;10760:23;10706:24;10760:14;:23::i;:::-;-1:-1:-1;;;;;10751:46:0;;;;;;;;;;;10631:174;;:::o;6943:348::-;7036:4;6738:16;;;;;;;;;;;-1:-1:-1;;;;;6738:16:0;7053:73;;;;-1:-1:-1;;;7053:73:0;;12076:2:1;7053:73:0;;;12058:21:1;12115:2;12095:18;;;12088:30;12154:34;12134:18;;;12127:62;-1:-1:-1;;;12205:18:1;;;12198:42;12257:19;;7053:73:0;11874:408:1;7053:73:0;7137:13;7153:23;7168:7;7153:14;:23::i;:::-;7137:39;;7206:5;-1:-1:-1;;;;;7195:16:0;:7;-1:-1:-1;;;;;7195:16:0;;:51;;;;7239:7;-1:-1:-1;;;;;7215:31:0;:20;7227:7;7215:11;:20::i;:::-;-1:-1:-1;;;;;7215:31:0;;7195:51;:87;;;;7250:32;7267:5;7274:7;7250:16;:32::i;:::-;7187:96;6943:348;-1:-1:-1;;;;6943:348:0:o;9935:578::-;10094:4;-1:-1:-1;;;;;10067:31:0;:23;10082:7;10067:14;:23::i;:::-;-1:-1:-1;;;;;10067:31:0;;10059:85;;;;-1:-1:-1;;;10059:85:0;;14509:2:1;10059:85:0;;;14491:21:1;14548:2;14528:18;;;14521:30;14587:34;14567:18;;;14560:62;-1:-1:-1;;;14638:18:1;;;14631:39;14687:19;;10059:85:0;14307:405:1;10059:85:0;-1:-1:-1;;;;;10163:16:0;;10155:65;;;;-1:-1:-1;;;10155:65:0;;11317:2:1;10155:65:0;;;11299:21:1;11356:2;11336:18;;;11329:30;11395:34;11375:18;;;11368:62;-1:-1:-1;;;11446:18:1;;;11439:34;11490:19;;10155:65:0;11115:400:1;10155:65:0;10337:29;10354:1;10358:7;10337:8;:29::i;:::-;-1:-1:-1;;;;;10379:15:0;;;;;;10398:1;10379:15;;;;;;;:20;;10398:1;;10379:15;;:20;;10398:1;;10379:20;:::i;:::-;;;;-1:-1:-1;;;;;;;10410:13:0;;;;;;10427:1;10410:13;;;;;;;:18;;10427:1;;10410:13;;:18;;10427:1;;10410:18;:::i;:::-;;;;-1:-1:-1;;10439:7:0;:16;;;;;;;;;;;:21;;-1:-1:-1;;;;;;10439:21:0;-1:-1:-1;;;;;10439:21:0;;;;;;;;;10478:27;;10439:16;;10478:27;;;;;;;9935:578;;;:::o;6021:315::-;6178:28;6188:4;6194:2;6198:7;6178:9;:28::i;:::-;6225:48;6248:4;6254:2;6258:7;6267:5;6225:22;:48::i;:::-;6217:111;;;;-1:-1:-1;;;6217:111:0;;;;;;;:::i;25049:715::-;25105:13;25318:10;25314:53;;-1:-1:-1;;25345:10:0;;;;;;;;;;;;-1:-1:-1;;;25345:10:0;;;;;25049:715::o;25314:53::-;25392:5;25377:12;25433:78;25440:9;;25433:78;;25466:8;;;;:::i;:::-;;-1:-1:-1;25489:10:0;;-1:-1:-1;25497:2:0;25489:10;;:::i;:::-;;;25433:78;;;25521:19;25553:6;25543:17;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;25543:17:0;;25521:39;;25571:154;25578:10;;25571:154;;25605:11;25615:1;25605:11;;:::i;:::-;;-1:-1:-1;25674:10:0;25682:2;25674:5;:10;:::i;:::-;25661:24;;:2;:24;:::i;:::-;25648:39;;25631:6;25638;25631:14;;;;;;;;:::i;:::-;;;;:56;-1:-1:-1;;;;;25631:56:0;;;;;;;;-1:-1:-1;25702:11:0;25711:2;25702:11;;:::i;:::-;;;25571:154;;26118:1607;26216:11;;26176:13;;26242:8;26238:23;;-1:-1:-1;;26252:9:0;;;;;;;;;-1:-1:-1;26252:9:0;;;26118:1607;-1:-1:-1;26118:1607:0:o;26238:23::-;26313:18;26351:1;26340:7;:3;26346:1;26340:7;:::i;:::-;26339:13;;;;:::i;:::-;26334:19;;:1;:19;:::i;:::-;26313:40;-1:-1:-1;26411:19:0;26443:15;26313:40;26456:2;26443:15;:::i;:::-;26433:26;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;26433:26:0;;26411:48;;26472:18;26493:5;;;;;;;;;;;;;;;;;26472:26;;26562:1;26555:5;26551:13;26607:2;26599:6;26595:15;26658:1;26626:777;26681:3;26678:1;26675:10;26626:777;;;26736:1;26779:12;;;;;26773:19;26874:4;26862:2;26858:14;;;;;26840:40;;26834:47;26983:2;26979:14;;;26975:25;;26961:40;;26955:47;27112:1;27108:13;;;27104:24;;27090:39;;27084:46;27232:16;;;;27218:31;;27212:38;26910:1;26906:11;;;27004:4;26951:58;;;26942:68;27035:11;;27080:57;;;27071:67;;;;27163:11;;27208:49;;27199:59;27287:3;27283:13;27316:22;;27386:1;27371:17;;;;26729:9;26626:777;;;26630:44;27435:1;27430:3;27426:11;27456:1;27451:84;;;;27554:1;27549:82;;;;27419:212;;27451:84;-1:-1:-1;;;;;27484:17:0;;27477:43;27451:84;;27549:82;-1:-1:-1;;;;;27582:17:0;;27575:41;27419:212;-1:-1:-1;;;27647:26:0;;;27654:6;26118:1607;-1:-1:-1;;;;26118:1607:0:o;7970:321::-;8100:18;8106:2;8110:7;8100:5;:18::i;:::-;8151:54;8182:1;8186:2;8190:7;8199:5;8151:22;:54::i;:::-;8129:154;;;;-1:-1:-1;;;8129:154:0;;;;;;;:::i;11370:801::-;11525:4;3956:20;;4004:8;11542:622;;11582:70;;-1:-1:-1;;;11582:70:0;;-1:-1:-1;;;;;11582:36:0;;;;;:70;;11619:10;;11631:4;;11637:7;;11646:5;;11582:70;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11582:70:0;;;;;;;;-1:-1:-1;;11582:70:0;;;;;;;;;;;;:::i;:::-;;;11578:531;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11826:13:0;;11822:272;;11869:60;;-1:-1:-1;;;11869:60:0;;;;;;;:::i;11822:272::-;12044:6;12038:13;12029:6;12025:2;12021:15;12014:38;11578:531;-1:-1:-1;;;;;;11703:55:0;-1:-1:-1;;;11703:55:0;;-1:-1:-1;11696:62:0;;11542:622;-1:-1:-1;12148:4:0;11370:801;;;;;;:::o;8627:382::-;-1:-1:-1;;;;;8707:16:0;;8699:61;;;;-1:-1:-1;;;8699:61:0;;13735:2:1;8699:61:0;;;13717:21:1;;;13754:18;;;13747:30;13813:34;13793:18;;;13786:62;13865:18;;8699:61:0;13533:356:1;8699:61:0;6714:4;6738:16;;;;;;;;;;;-1:-1:-1;;;;;6738:16:0;:30;8771:58;;;;-1:-1:-1;;;8771:58:0;;10960:2:1;8771:58:0;;;10942:21:1;10999:2;10979:18;;;10972:30;11038;11018:18;;;11011:58;11086:18;;8771:58:0;10758:352:1;8771:58:0;-1:-1:-1;;;;;8900:13:0;;;;;;8917:1;8900:13;;;;;;;:18;;8917:1;;8900:13;;:18;;8917:1;;8900:18;:::i;:::-;;;;-1:-1:-1;;8929:7:0;:16;;;;;;;;;;;:21;;-1:-1:-1;;;;;;8929:21:0;-1:-1:-1;;;;;8929:21:0;;;;;;;;8968:33;;8929:16;;:7;8968:33;;8929:7;;8968:33;8627:382;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:173:1:-;82:20;;-1:-1:-1;;;;;131:31:1;;121:42;;111:70;;177:1;174;167:12;192:186;251:6;304:2;292:9;283:7;279:23;275:32;272:52;;;320:1;317;310:12;272:52;343:29;362:9;343:29;:::i;:::-;333:39;192:186;-1:-1:-1;;;192:186:1:o;383:260::-;451:6;459;512:2;500:9;491:7;487:23;483:32;480:52;;;528:1;525;518:12;480:52;551:29;570:9;551:29;:::i;:::-;541:39;;599:38;633:2;622:9;618:18;599:38;:::i;:::-;589:48;;383:260;;;;;:::o;648:328::-;725:6;733;741;794:2;782:9;773:7;769:23;765:32;762:52;;;810:1;807;800:12;762:52;833:29;852:9;833:29;:::i;:::-;823:39;;881:38;915:2;904:9;900:18;881:38;:::i;:::-;871:48;;966:2;955:9;951:18;938:32;928:42;;648:328;;;;;:::o;981:1138::-;1076:6;1084;1092;1100;1153:3;1141:9;1132:7;1128:23;1124:33;1121:53;;;1170:1;1167;1160:12;1121:53;1193:29;1212:9;1193:29;:::i;:::-;1183:39;;1241:38;1275:2;1264:9;1260:18;1241:38;:::i;:::-;1231:48;;1326:2;1315:9;1311:18;1298:32;1288:42;;1381:2;1370:9;1366:18;1353:32;1404:18;1445:2;1437:6;1434:14;1431:34;;;1461:1;1458;1451:12;1431:34;1499:6;1488:9;1484:22;1474:32;;1544:7;1537:4;1533:2;1529:13;1525:27;1515:55;;1566:1;1563;1556:12;1515:55;1602:2;1589:16;1624:2;1620;1617:10;1614:36;;;1630:18;;:::i;:::-;1705:2;1699:9;1673:2;1759:13;;-1:-1:-1;;1755:22:1;;;1779:2;1751:31;1747:40;1735:53;;;1803:18;;;1823:22;;;1800:46;1797:72;;;1849:18;;:::i;:::-;1889:10;1885:2;1878:22;1924:2;1916:6;1909:18;1964:7;1959:2;1954;1950;1946:11;1942:20;1939:33;1936:53;;;1985:1;1982;1975:12;1936:53;2041:2;2036;2032;2028:11;2023:2;2015:6;2011:15;1998:46;2086:1;2081:2;2076;2068:6;2064:15;2060:24;2053:35;2107:6;2097:16;;;;;;;981:1138;;;;;;;:::o;2124:347::-;2189:6;2197;2250:2;2238:9;2229:7;2225:23;2221:32;2218:52;;;2266:1;2263;2256:12;2218:52;2289:29;2308:9;2289:29;:::i;:::-;2279:39;;2368:2;2357:9;2353:18;2340:32;2415:5;2408:13;2401:21;2394:5;2391:32;2381:60;;2437:1;2434;2427:12;2381:60;2460:5;2450:15;;;2124:347;;;;;:::o;2476:254::-;2544:6;2552;2605:2;2593:9;2584:7;2580:23;2576:32;2573:52;;;2621:1;2618;2611:12;2573:52;2644:29;2663:9;2644:29;:::i;:::-;2634:39;2720:2;2705:18;;;;2692:32;;-1:-1:-1;;;2476:254:1:o;2735:290::-;2804:6;2857:2;2845:9;2836:7;2832:23;2828:32;2825:52;;;2873:1;2870;2863:12;2825:52;2899:16;;-1:-1:-1;;;;;;2944:32:1;;2934:43;;2924:71;;2991:1;2988;2981:12;3030:180;3089:6;3142:2;3130:9;3121:7;3117:23;3113:32;3110:52;;;3158:1;3155;3148:12;3110:52;-1:-1:-1;3181:23:1;;3030:180;-1:-1:-1;3030:180:1:o;3215:248::-;3283:6;3291;3344:2;3332:9;3323:7;3319:23;3315:32;3312:52;;;3360:1;3357;3350:12;3312:52;-1:-1:-1;;3383:23:1;;;3453:2;3438:18;;;3425:32;;-1:-1:-1;3215:248:1:o;3468:257::-;3509:3;3547:5;3541:12;3574:6;3569:3;3562:19;3590:63;3646:6;3639:4;3634:3;3630:14;3623:4;3616:5;3612:16;3590:63;:::i;:::-;3707:2;3686:15;-1:-1:-1;;3682:29:1;3673:39;;;;3714:4;3669:50;;3468:257;-1:-1:-1;;3468:257:1:o;3730:185::-;3772:3;3810:5;3804:12;3825:52;3870:6;3865:3;3858:4;3851:5;3847:16;3825:52;:::i;:::-;3893:16;;;;;3730:185;-1:-1:-1;;3730:185:1:o;4050:1449::-;4469:3;4507:6;4501:13;4533:4;4546:51;4590:6;4585:3;4580:2;4572:6;4568:15;4546:51;:::i;:::-;4660:13;;4619:16;;;;4682:55;4660:13;4619:16;4704:15;;;4682:55;:::i;:::-;4804:13;;4759:20;;;4826:55;4804:13;4759:20;4848:15;;;4826:55;:::i;:::-;4948:13;;4903:20;;;4970:55;4948:13;4903:20;4992:15;;;4970:55;:::i;:::-;5092:13;;5047:20;;;5114:55;5092:13;5047:20;5136:15;;;5114:55;:::i;:::-;5236:13;;5191:20;;;5258:55;5236:13;5191:20;5280:15;;;5258:55;:::i;:::-;5380:13;;5335:20;;;5402:55;5380:13;5335:20;5424:15;;;5402:55;:::i;:::-;5473:20;;;;;4050:1449;-1:-1:-1;;;;;;;;;;4050:1449:1:o;5504:553::-;-1:-1:-1;;;5862:3:1;5855:17;-1:-1:-1;;;5897:1:1;5892:3;5888:11;5881:24;5837:3;5934:6;5928:13;5950:61;6004:6;6000:1;5995:3;5991:11;5984:4;5976:6;5972:17;5950:61;:::i;:::-;6031:16;;;;6049:1;6027:24;;5504:553;-1:-1:-1;;5504:553:1:o;6062:448::-;6324:31;6319:3;6312:44;6294:3;6385:6;6379:13;6401:62;6456:6;6451:2;6446:3;6442:12;6435:4;6427:6;6423:17;6401:62;:::i;:::-;6483:16;;;;6501:2;6479:25;;6062:448;-1:-1:-1;;6062:448:1:o;6515:556::-;-1:-1:-1;;;6873:3:1;6866:20;-1:-1:-1;;;6911:1:1;6906:3;6902:11;6895:24;6848:3;6948:6;6942:13;6964:61;7018:6;7014:1;7009:3;7005:11;6998:4;6990:6;6986:17;6964:61;:::i;:::-;7045:16;;;;7063:1;7041:24;;6515:556;-1:-1:-1;;6515:556:1:o;7076:::-;-1:-1:-1;;;7434:3:1;7427:20;-1:-1:-1;;;7472:1:1;7467:3;7463:11;7456:24;7409:3;7509:6;7503:13;7525:61;7579:6;7575:1;7570:3;7566:11;7559:4;7551:6;7547:17;7525:61;:::i;7637:1580::-;-1:-1:-1;;;8137:64:1;;8224:13;;8119:3;;8246:62;8224:13;8296:2;8287:12;;8280:4;8268:17;;8246:62;:::i;:::-;8372:66;8367:2;8327:16;;;8359:11;;;8352:87;8468:34;8463:2;8455:11;;8448:55;8532:34;8527:2;8519:11;;8512:55;8597:34;8591:3;8583:12;;8576:56;8662:34;8656:3;8648:12;;8641:56;8727:34;8721:3;8713:12;;8706:56;8792:34;8786:3;8778:12;;8771:56;8857:34;8851:3;8843:12;;8836:56;8922:66;8916:3;8908:12;;8901:88;9019:66;9013:3;9005:12;;8998:88;-1:-1:-1;;;9110:3:1;9102:12;;9095:30;9141:70;9171:39;9205:3;9197:12;;9189:6;9171:39;:::i;:::-;-1:-1:-1;;;3985:27:1;;4037:1;4028:11;;3920:125;9141:70;9134:77;7637:1580;-1:-1:-1;;;;;7637:1580:1:o;9430:488::-;-1:-1:-1;;;;;9699:15:1;;;9681:34;;9751:15;;9746:2;9731:18;;9724:43;9798:2;9783:18;;9776:34;;;9846:3;9841:2;9826:18;;9819:31;;;9624:4;;9867:45;;9892:19;;9884:6;9867:45;:::i;:::-;9859:53;9430:488;-1:-1:-1;;;;;;9430:488:1:o;10115:219::-;10264:2;10253:9;10246:21;10227:4;10284:44;10324:2;10313:9;10309:18;10301:6;10284:44;:::i;10339:414::-;10541:2;10523:21;;;10580:2;10560:18;;;10553:30;10619:34;10614:2;10599:18;;10592:62;-1:-1:-1;;;10685:2:1;10670:18;;10663:48;10743:3;10728:19;;10339:414::o;15119:413::-;15321:2;15303:21;;;15360:2;15340:18;;;15333:30;15399:34;15394:2;15379:18;;15372:62;-1:-1:-1;;;15465:2:1;15450:18;;15443:47;15522:3;15507:19;;15119:413::o;16368:128::-;16408:3;16439:1;16435:6;16432:1;16429:13;16426:39;;;16445:18;;:::i;:::-;-1:-1:-1;16481:9:1;;16368:128::o;16501:120::-;16541:1;16567;16557:35;;16572:18;;:::i;:::-;-1:-1:-1;16606:9:1;;16501:120::o;16626:168::-;16666:7;16732:1;16728;16724:6;16720:14;16717:1;16714:21;16709:1;16702:9;16695:17;16691:45;16688:71;;;16739:18;;:::i;:::-;-1:-1:-1;16779:9:1;;16626:168::o;16799:125::-;16839:4;16867:1;16864;16861:8;16858:34;;;16872:18;;:::i;:::-;-1:-1:-1;16909:9:1;;16799:125::o;16929:258::-;17001:1;17011:113;17025:6;17022:1;17019:13;17011:113;;;17101:11;;;17095:18;17082:11;;;17075:39;17047:2;17040:10;17011:113;;;17142:6;17139:1;17136:13;17133:48;;;-1:-1:-1;;17177:1:1;17159:16;;17152:27;16929:258::o;17192:135::-;17231:3;-1:-1:-1;;17252:17:1;;17249:43;;;17272:18;;:::i;:::-;-1:-1:-1;17319:1:1;17308:13;;17192:135::o;17332:112::-;17364:1;17390;17380:35;;17395:18;;:::i;:::-;-1:-1:-1;17429:9:1;;17332:112::o;17449:127::-;17510:10;17505:3;17501:20;17498:1;17491:31;17541:4;17538:1;17531:15;17565:4;17562:1;17555:15;17581:127;17642:10;17637:3;17633:20;17630:1;17623:31;17673:4;17670:1;17663:15;17697:4;17694:1;17687:15;17713:127;17774:10;17769:3;17765:20;17762:1;17755:31;17805:4;17802:1;17795:15;17829:4;17826:1;17819:15;17845:127;17906:10;17901:3;17897:20;17894:1;17887:31;17937:4;17934:1;17927:15;17961:4;17958:1;17951:15
`
export const swarmSource = `
ipfs://11e1f8f26dc82902d166426d6b23655329087056813aa961c66fc77e60ee2194
`
