# HTTP 请求头过滤模式

GoToSocial 当前提供“屏蔽”、“允许”和禁用的 HTTP 请求头过滤模式，可以通过在 config.yaml 中设置 `advanced-header-filter-mode`，或使用环境变量 `GTS_ADVANCED_HEADER_FILTER_MODE` 来配置。这些模式的具体说明如下。

!!! warning
    HTTP 请求头过滤是一个高级设置。如果你不熟悉 HTTP 请求头的使用和复杂性，修改这些设置可能会导致联合功能中断，甚至无法访问你自己的实例。

    HTTP 请求头过滤仍被视为“实验性”功能。它应该能如预期工作，但可能会导致其他地方出现错误或边缘情况，这点我们尚不确定！

## 禁用请求头过滤模式（默认）

当 `advanced-header-filter-mode` 设置为 `""`（即空字符串）时，将禁用所有请求头过滤。

## 屏蔽过滤模式

当 `advanced-header-filter-mode` 设置为 `"block"` 时，你的实例将正常接受 HTTP 请求（需进行 API 令牌检查、HTTP 签名检查等），但会拒绝符合你通过设置面板明确创建的屏蔽头过滤规则的请求。

在屏蔽模式中，可以使用允许头过滤规则来覆盖现有的屏蔽过滤规则，以提供更细致的控制。

在屏蔽模式下，请求将被接受，前提是该请求被明确允许或未被明确屏蔽。

## 允许过滤模式

当 `advanced-header-filter-mode` 设置为 `"allow"` 时，你的实例只会接受那些与通过设置面板明确创建的允许头过滤规则相匹配的 HTTP 请求。所有其他请求将被拒绝。

在允许模式中，可以使用屏蔽头过滤规则来覆盖现有的允许过滤规则，以提供更细致的控制。

在允许模式下，请求只有在被明确允许且未被明确屏蔽的情况下才会被接受。

!!! danger
    允许过滤模式是一个极为严格的模式，几乎肯定会阻止许多（合法的）客户端访问你的实例，包括你自己。只有在完全明确你的目标时才应启用此模式。