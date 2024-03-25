import {render, waitFor, screen} from "@testing-library/react";
import Gallery from "@/app/gallery/(gallery)/page";
import {components} from "@/lib/data"

describe("Gallery page",  () => {
  render(<Gallery />);
  it("has all of the animation cards in the data", async () => {
    
    await waitFor(() => {
      components.forEach((component) => {
        const titles = screen.getAllByText(component.name);
        expect(titles.length).toBeGreaterThan(0);
        titles.forEach(title => {
          expect(title).toBeInTheDocument();
        });
        
        const subtitles = screen.getAllByText(component.category);
        expect(subtitles.length).toBeGreaterThan(0);
        subtitles.forEach(subtitle => {
          expect(subtitle).toBeInTheDocument();
        });
      })
      
    })
  })
})