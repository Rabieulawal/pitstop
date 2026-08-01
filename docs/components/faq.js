import { useState } from 'react'
import { Box, Card, Text } from 'theme-ui'

const Faq = ({ items }) => {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  return (
    <Box as="dl" sx={{ m: 0 }}>
      {items.map(item => {
        const isOpen = openId === item.id
        return (
          <Card
            key={item.id}
            variant="primary"
            sx={{
              p: 0,
              mb: 3,
              overflow: 'hidden',
              transition: 'box-shadow .125s ease-in-out',
              ...(isOpen && { boxShadow: 'elevated' })
            }}
          >
            <Text as="dt" sx={{ m: 0 }}>
              <Box
                as="button"
                id={`faq-button-${item.id}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 3,
                  p: 3,
                  bg: 'transparent',
                  color: 'text',
                  border: 0,
                  fontFamily: 'inherit',
                  fontSize: [2, 3],
                  fontWeight: 'bold',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'color .125s ease-in-out',
                  ':hover': {
                    color: 'primary'
                  },
                  ':focus-visible': {
                    color: 'primary',
                    outline: 'none',
                    boxShadow: '0 0 0 2px'
                  },
                  '> svg': {
                    flexShrink: 0,
                    transition: 'transform .2s ease-in-out',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }
                }}
              >
                {item.question}
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentcolor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Box>
            </Text>
            <Box
              as="dd"
              id={`faq-panel-${item.id}`}
              sx={{
                m: 0,
                // generous cap so long answers are never clipped
                maxHeight: isOpen ? '40rem' : 0,
                overflow: 'hidden',
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? 'visible' : 'hidden',
                transition:
                  'max-height .25s ease-in-out, opacity .25s ease-in-out'
              }}
            >
              <Text
                as="p"
                sx={{ m: 0, px: 3, pb: 3, color: 'secondary', fontSize: 2 }}
              >
                {item.answer}
              </Text>
            </Box>
          </Card>
        )
      })}
    </Box>
  )
}

export default Faq
