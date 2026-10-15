<template>
  <!-- Architecture-style illustration: one system connecting the tools a business already uses. -->
  <svg
    viewBox="0 0 420 340"
    role="img"
    aria-labelledby="hero-diagram-title"
    class="w-full"
  >
    <title id="hero-diagram-title">Diagram: a central business system connected to Microsoft 365, accounting, reporting and an Azure SQL database</title>
    <g
      class="stroke-line-strong"
      stroke-width="1.5"
      fill="none"
    >
      <path d="M210 170 L80 60" />
      <path d="M210 170 L340 60" />
      <path d="M210 170 L80 280" />
      <path d="M210 170 L340 280" />
    </g>
    <g
      fill="#14B8A6"
    >
      <circle
        cx="145"
        cy="115"
        r="3"
      />
      <circle
        cx="275"
        cy="115"
        r="3"
      />
      <circle
        cx="145"
        cy="225"
        r="3"
      />
      <circle
        cx="275"
        cy="225"
        r="3"
      />
    </g>
    <g
      font-family="Inter Variable, system-ui, sans-serif"
      font-size="13"
      text-anchor="middle"
    >
      <g>
        <rect
          x="20"
          y="35"
          width="120"
          height="50"
          rx="8"
          class="fill-surface-raised stroke-line-strong"
        />
        <text
          x="80"
          y="65"
          class="fill-body"
        >Microsoft 365</text>
      </g>
      <g>
        <rect
          x="280"
          y="35"
          width="120"
          height="50"
          rx="8"
          class="fill-surface-raised stroke-line-strong"
        />
        <text
          x="340"
          y="65"
          class="fill-body"
        >Accounting</text>
      </g>
      <g>
        <rect
          x="20"
          y="255"
          width="120"
          height="50"
          rx="8"
          class="fill-surface-raised stroke-line-strong"
        />
        <text
          x="80"
          y="285"
          class="fill-body"
        >Azure SQL</text>
      </g>
      <g>
        <rect
          x="280"
          y="255"
          width="120"
          height="50"
          rx="8"
          class="fill-surface-raised stroke-line-strong"
        />
        <text
          x="340"
          y="285"
          class="fill-body"
        >Reporting</text>
      </g>
      <g>
        <rect
          x="135"
          y="135"
          width="150"
          height="70"
          rx="10"
          class="fill-surface"
          stroke="#2563EB"
          stroke-width="2"
        />
        <text
          x="210"
          y="166"
          class="fill-ink"
          font-weight="600"
          font-size="14"
        >Your business</text>
        <text
          x="210"
          y="186"
          class="fill-ink"
          font-weight="600"
          font-size="14"
        >system</text>
      </g>
    </g>
  </svg>
</template>
