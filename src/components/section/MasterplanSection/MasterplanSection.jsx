"use client"

import { useState } from "react"
import MasterplanImage from "./MasterplanComponents/MasterplanImage/MasterplanImage"
import ApartmentsModal from "./MasterplanComponents/ApartmentsModal/ApartmentsModal"

function MasterplanSection({ section }) {
  const [activeBlock, setActiveBlock] = useState(null)
  const { page } = section
  
  const apartmentsByBlock = section.apartments.filter(
    a => a.block_num === activeBlock
  )

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      
      <MasterplanImage
        page={page}
        onSelectBlock={setActiveBlock}
      />

      {activeBlock && (
        <ApartmentsModal
          block={activeBlock}
          apartments={apartmentsByBlock}
          onClose={() => setActiveBlock(null)}
        />
      )}

    </div>
  )
}

export default MasterplanSection
