var block = null; // Variable to store the block element

function onnajechaniemouse(event) {
    if (!block) {
        // Create a div element for the block
        block = document.createElement("div");

        // Set styles for the block
        block.style.width = "200px";
        block.style.height = "50px";
        block.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        block.style.color = "#fff";
        block.style.position = "absolute";
        block.style.top = (event.clientY - 50) + "px"; // Position the block above the cursor
        block.style.left = (event.clientX - 50) + "px"; // Position the block horizontally centered on the cursor
        block.style.display = "block";
        block.style.zIndex = "999"; // Ensure the block appears above other elements
        block.style.borderRadius = "10px";

        // Set content for the block
        block.innerHTML = "Zweryfikowano przez luckcraft.pl";

        // Append the block to the body
        document.body.appendChild(block);

        // Add click event listener to the block to hide it when clicked
        block.addEventListener("click", function() {
            hideBlock();
        });

        // Add mouseleave event listener to hide the block when the mouse leaves it
        block.addEventListener("mouseleave", function() {
            hideBlock();
        });
    } else {
        // Show or hide the block based on its current display status
        toggleBlockVisibility();
    }
}

function toggleBlockVisibility() {
    if (block.style.display === "none") {
        block.style.display = "block";
    } else {
        hideBlock();
    }
}

function hideBlock() {
    if (block) {
        block.style.display = "none";
        block = null;
    }
}

// Example of how to trigger the function on mouseover
var element = document.getElementById("verifyClick");
element.addEventListener("mouseover", onnajechaniemouse);
