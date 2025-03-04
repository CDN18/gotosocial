/*
	GoToSocial
	Copyright (C) GoToSocial Authors admin@gotosocial.org
	SPDX-License-Identifier: AGPL-3.0-or-later

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import React from "react";
import TokensSearchForm from "./search";

export default function Tokens() {
	return (
		<div className="tokens-view">
			<div className="form-section-docs">
				<h1>访问令牌</h1>
				<p>
					在这里，你可以搜索你已被授权访问您的帐户和/或代表你执行操作的应用的访问令牌。 你可以通过点击令牌下的“撤销”按钮来使令牌失效。 这将从数据库中删除令牌。
					<br/><br/>
					<strong>
						如果你看到任何来自你不认识的应用的令牌，或者不记得你授权过它们访问你的帐户，那么你应该撤销对应的访问令牌，并考虑尽快更改您的密码。
					</strong>
				</p>
				<a
					href="https://docs.gotosocial.org/zh-cn/latest/user_guide/settings/#访问令牌"
					target="_blank"
					className="docslink"
					rel="noreferrer"
				>
					了解更多关于管理您的访问令牌的信息（在新标签页中打开）
				</a>
			</div>
			<TokensSearchForm />
		</div>
	);
}
