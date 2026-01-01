"use client"

import { useState } from "react"
import MasterplanImage from "./MasterplanComponents/MasterplanImage/MasterplanImage"
import ApartmentsModal from "./MasterplanComponents/ApartmentsModal/ApartmentsModal"

function MasterplanSection({ data }) {
  const [activeBlock, setActiveBlock] = useState(null)
  const filteredData = data.find(item => item.section === "masterplan");
  const apartmentsByBlock = filteredData.apartments.filter(
    a => a.block_num === activeBlock
  )

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      
      <MasterplanImage
        page={filteredData.page}
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
